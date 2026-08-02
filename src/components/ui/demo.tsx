"use client";

import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

export function Demo() {
  const originalItems: CarouselItem[] = [
    {
      id: 1,
      title: "FLUMENX IT LEAD",
      subtitle: "Enterprise IT Lead",
      badge: "Current Role",
      detail: "Leading core web architecture, Linux VPS cloud hosting (PM2/Nginx), and enterprise solution delivery.",
      stats: [{ label: "Uptime", value: "99.9%" }, { label: "Role", value: "Lead" }]
    },
    {
      id: 2,
      title: "150K+ EMPLOYEES",
      subtitle: "High-Volume Engine",
      badge: "Scalability",
      detail: "Architected statutory compliance engine processing monthly payroll for 150,000+ active employees.",
      stats: [{ label: "Scale", value: "150K+" }, { label: "Impact", value: "Zero Failures" }]
    },
    {
      id: 3,
      title: "MASTERS EXPO",
      subtitle: "Event Command Center",
      badge: "Enterprise",
      detail: "Engineered sub-100ms Socket.IO WebSocket synchronization and multi-tier RBAC for live event operations.",
      stats: [{ label: "Latency", value: "<100ms" }, { label: "Tech", value: "Next.js 14" }]
    },
    {
      id: 4,
      title: "SUSRUTHA CMS",
      subtitle: "Healthcare CMS",
      badge: "Healthcare",
      detail: "Built healthcare CMS handling patient queues, clinical records, and operational scheduling with high security.",
      stats: [{ label: "Domain", value: "Health AI" }, { label: "Security", value: "HIPAA Compliant" }]
    },
    {
      id: 5,
      title: "TRACK PI CRM",
      subtitle: "Fintech & Compliance",
      badge: "Fintech",
      detail: "Constructed statutory engines and financial workflows serving high-throughput enterprise client operations.",
      stats: [{ label: "Throughput", value: "+65%" }, { label: "Module", value: "Statutory" }]
    },
    {
      id: 6,
      title: "ZERO-TRUST AUTH",
      subtitle: "WebAuthn & Passkeys",
      badge: "Security",
      detail: "Implemented biometric WebAuthn passkey authentication eliminating password vulnerabilities across platforms.",
      stats: [{ label: "Type", value: "WebAuthn" }, { label: "Passkeys", value: "Biometric" }]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <RulerCarousel originalItems={originalItems} />
    </div>
  );
}
