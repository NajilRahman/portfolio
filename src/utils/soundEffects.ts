// High-Fidelity Synthesized Haptic UI Sound Engine
class SoundEngine {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  public initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Realistic Tactile Mechanical Button Click (Apple Haptic Engine Style)
  public playClick() {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // 1. High transient snap (1400Hz decay)
      const oscHigh = this.ctx.createOscillator();
      const gainHigh = this.ctx.createGain();
      oscHigh.type = 'triangle';
      oscHigh.frequency.setValueAtTime(1400, now);
      oscHigh.frequency.exponentialRampToValueAtTime(300, now + 0.018);
      gainHigh.gain.setValueAtTime(0.08, now);
      gainHigh.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

      oscHigh.connect(gainHigh);
      gainHigh.connect(this.ctx.destination);
      oscHigh.start(now);
      oscHigh.stop(now + 0.018);

      // 2. Low tactile thud (160Hz body)
      const oscLow = this.ctx.createOscillator();
      const gainLow = this.ctx.createGain();
      oscLow.type = 'sine';
      oscLow.frequency.setValueAtTime(160, now);
      oscLow.frequency.exponentialRampToValueAtTime(40, now + 0.025);
      gainLow.gain.setValueAtTime(0.09, now);
      gainLow.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      oscLow.connect(gainLow);
      gainLow.connect(this.ctx.destination);
      oscLow.start(now);
      oscLow.stop(now + 0.025);
    } catch {
      // Ignore audio context autoplay policy blocks
    }
  }

  // Subtle Delicate Micro Hover Tick
  public playHover() {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.015);

      gain.gain.setValueAtTime(0.012, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.015);
    } catch {
      // Ignore
    }
  }

  // Splash Screen Riser Sweep
  public playSplashRiser() {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 1.6);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.6);
    } catch {
      // Ignore
    }
  }

  // Splash Screen Harmonic Completion Chime
  public playSplashChime() {
    if (this.muted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      freqs.forEach((freq, idx) => {
        const now = this.ctx!.currentTime + idx * 0.06;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now);
        osc.stop(now + 0.6);
      });
    } catch {
      // Ignore
    }
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    return this.muted;
  }
}

export const soundFx = new SoundEngine();
