import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  MessageCircle,
  Calendar,
  Shield,
  Microscope,
  Zap,
  Activity,
  Award,
  Clock,
  CheckCircle,
  ChevronDown,
  Layers,
  RefreshCcw,
  Stethoscope,
  Bone,
  Heart,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"


const OR_IMG =
  "https://images.unsplash.com/photo-1579684288452-b334934f845f?w=900&h=600&fit=crop&auto=format"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  {
    icon: Layers,
    title: "Hernias de disco",
    desc: "Diagnóstico y tratamiento de protrusiones discales con técnicas mínimamente invasivas.",
  },
  {
    icon: Activity,
    title: "Dolor lumbar",
    desc: "Evaluación integral del dolor de espalda baja con planes de tratamiento personalizados.",
  },
  {
    icon: Zap,
    title: "Lesiones deportivas",
    desc: "Atención especializada para atletas con lesiones musculoesqueléticas y de columna.",
  },
  {
    icon: Bone,
    title: "Cirugía de columna",
    desc: "Procedimientos quirúrgicos de alta precisión con tecnología de vanguardia.",
  },
  {
    icon: RefreshCcw,
    title: "Reemplazo articular",
    desc: "Cirugía de reemplazo de cadera, rodilla y otras articulaciones afectadas.",
  },
  {
    icon: Shield,
    title: "Fracturas",
    desc: "Tratamiento ortopédico de fracturas con métodos conservadores o quirúrgicos.",
  },
  {
    icon: Stethoscope,
    title: "Consulta ortopédica",
    desc: "Evaluación completa del sistema musculoesquelético con diagnóstico preciso.",
  },
  {
    icon: Microscope,
    title: "Tratamientos mínimamente invasivos",
    desc: "Cirugías con menor tiempo de recuperación y resultados óptimos a largo plazo.",
  },
]

const reasons = [
  {
    icon: Microscope,
    title: "Tratamientos modernos",
    desc: "Aplicamos las técnicas más avanzadas y actualizadas en ortopedia y cirugía de columna.",
  },
  {
    icon: Heart,
    title: "Atención personalizada",
    desc: "Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.",
  },
  {
    icon: Zap,
    title: "Tecnología avanzada",
    desc: "Equipamiento de última generación para diagnóstico y tratamiento de precisión.",
  },
  {
    icon: Clock,
    title: "Diagnóstico rápido",
    desc: "Resultados ágiles para iniciar el tratamiento adecuado en el menor tiempo posible.",
  },
  {
    icon: CheckCircle,
    title: "Opciones quirúrgicas y no quirúrgicas",
    desc: "Evaluamos todas las alternativas disponibles antes de recomendar un procedimiento.",
  },
]

const testimonials = [
  {
    name: "María González",
    role: "Hernia de disco — Monterrey",
    text: "El Dr. Galván me explicó cada paso del proceso con claridad. Gracias a su tratamiento mínimamente invasivo recuperé mi calidad de vida en tiempo récord. Lo recomiendo ampliamente.",
    rating: 5,
  },
  {
    name: "Roberto Martínez",
    role: "Dolor lumbar crónico — Guadalupe",
    text: "Después de años sufriendo dolor lumbar, el Dr. Galván encontró la causa y diseñó un tratamiento que realmente funcionó. Profesionalismo y calidad humana inigualables.",
    rating: 5,
  },
  {
    name: "Ana Ramírez",
    role: "Cirugía de columna — San Pedro",
    text: "Excelente atención desde la consulta inicial hasta el seguimiento postoperatorio. Me siento completamente recuperada y muy agradecida con el doctor y su equipo.",
    rating: 5,
  },
]

const faqs = [
  {
    q: "¿Cuándo debo consultar con un cirujano de columna?",
    a: "Debes consultar cuando presentes dolor persistente en espalda o cuello por más de 4 semanas, entumecimiento u hormigueo en extremidades, debilidad muscular, o si el dolor afecta significativamente tu calidad de vida y no ha mejorado con tratamientos conservadores.",
  },
  {
    q: "¿Toda cirugía de columna requiere hospitalización prolongada?",
    a: "No. Con las técnicas mínimamente invasivas actuales, muchos procedimientos se realizan de forma ambulatoria o con estancias muy cortas de 24–48 horas. La recuperación también es significativamente más rápida que con cirugías convencionales.",
  },
  {
    q: "¿Qué debo llevar a mi primera consulta?",
    a: "Trae estudios de imagen previos (rayos X, resonancia magnética, tomografía), resultados de laboratorio recientes, lista de medicamentos actuales y cualquier tratamiento previo recibido. Si tienes historial médico relevante, también es útil llevarlo.",
  },
  {
    q: "¿Cuánto dura el proceso de recuperación tras una cirugía de columna?",
    a: "Depende del procedimiento. Con técnicas mínimamente invasivas, muchos pacientes retoman actividades ligeras en 2–4 semanas y actividad completa en 6–12 semanas. Las cirugías más complejas pueden requerir mayor tiempo de rehabilitación bajo supervisión médica.",
  },
  {
    q: "¿El Dr. Galván atiende con seguro médico?",
    a: "Trabajamos con diversas instituciones y seguros médicos. Te recomendamos contactarnos directamente para verificar la cobertura de tu plan específico y coordinar la atención de acuerdo a tus necesidades.",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(15,23,42,0.07)] shadow-sm shadow-black/[0.03]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo mark */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                <Bone className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[#0c1829]">Dr. Jaime Galván</p>
                <p className="text-[11px] text-[#64748b] font-medium">Ortopedia · Columna</p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-[#475569] hover:text-[#2563EB] hover:bg-[#eff6ff] transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/526188049556"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#2563EB] text-[#2563EB] text-sm font-semibold hover:bg-[#eff6ff] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors shadow-md shadow-blue-500/30"
              >
                <Calendar className="w-4 h-4" />
                Agendar cita
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#475569] hover:bg-[#f1f5f9] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[rgba(15,23,42,0.07)] bg-white px-5 py-4 space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:text-[#2563EB] hover:bg-[#eff6ff] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-[rgba(15,23,42,0.07)] mt-2">
              <a
                href="https://wa.me/526188049556"
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#2563EB] text-[#2563EB] text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" /> Contactar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#2563EB] text-white text-sm font-semibold"
              >
                <Calendar className="w-4 h-4" /> Agendar cita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative pt-16 lg:pt-[72px] min-h-screen flex items-center overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-[#eff6ff]" />
          <div className="absolute top-1/3 right-[10%] w-[480px] h-[480px] bg-[#2563EB]/8 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2563EB]/5 rounded-full blur-[60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full py-16 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
            {/* Left — copy */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dbeafe] border border-[#bfdbfe] text-[#1d4ed8] text-xs font-bold uppercase tracking-[0.1em] mb-8">
                <Award className="w-3.5 h-3.5" />
                Cédula Profesional 7840268
              </div>

              <h1 className="font-display text-[2.6rem] leading-[1.08] lg:text-[3.8rem] lg:leading-[1.05] font-bold text-[#0c1829] mb-6">
                Especialista en<br />
                <span className="text-[#2563EB]">Ortopedia y<br />Cirugía de Columna</span>
              </h1>

              <p className="text-lg text-[#64748b] leading-relaxed mb-10">
                Más de una década de experiencia brindando atención médica personalizada, diagnóstico preciso y tratamientos mínimamente invasivos para devolverte calidad de vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] text-white font-semibold text-[15px] hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar cita
                </a>
                <a
                  href="https://wa.me/526188049556"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#2563EB] text-[#2563EB] font-semibold text-[15px] hover:bg-[#eff6ff] transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-6 sm:gap-10">
                {[
                  { value: "10+", label: "Años de experiencia" },
                  { value: "1,500+", label: "Pacientes atendidos" },
                  { value: "500+", label: "Cirugías realizadas" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-6 sm:gap-10">
                    {i > 0 && <div className="w-px h-10 bg-[#e2e8f0]" />}
                    <div>
                      <p className="font-display text-3xl font-bold text-[#0c1829]">{s.value}</p>
                      <p className="text-xs text-[#94a3b8] font-medium mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — doctor photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative shapes */}
                <div className="absolute -top-8 -left-8 w-36 h-36 bg-[#2563EB] rounded-[28px] -z-10 rotate-6" />
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#bfdbfe] rounded-2xl -z-10 -rotate-3" />
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-32 bg-[#2563EB]/20 rounded-full" />

                {/* Photo */}
                <div className="w-72 h-[420px] sm:w-80 sm:h-[480px] lg:w-[360px] lg:h-[520px] rounded-[28px] overflow-hidden shadow-2xl bg-[#dbeafe]">
                  <img
                    src= "/galvanpicture.jpg"
                    alt="Dr. Jaime Galván Alaniz — Especialista en Ortopedia y Cirugía de Columna"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating card — credentials */}
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl shadow-black/10 p-4 flex items-center gap-3 border border-[#e2e8f0] min-w-[180px]">
                  <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0c1829]">Certificado</p>
                    <p className="text-[11px] text-[#64748b]">Ortopedia & Columna</p>
                  </div>
                </div>

                {/* Floating card — experience */}
                <div className="absolute -right-8 top-16 bg-[#2563EB] rounded-2xl shadow-xl shadow-blue-500/30 p-4 text-white min-w-[130px]">
                  <p className="font-display text-3xl font-bold leading-none mb-1">10+</p>
                  <p className="text-[11px] text-blue-200 font-medium">años de<br />experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section id="sobre-mi" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image + credentials card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[420px] lg:h-[500px] bg-[#dbeafe] shadow-xl">
                <img
                  src={OR_IMG}
                  alt="Instalaciones quirúrgicas de vanguardia para cirugía de columna"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating credentials panel */}
              <div className="absolute top-8 -right-5 lg:-right-10 bg-white rounded-2xl shadow-xl shadow-black/10 p-5 border border-[#e2e8f0] w-52">
                <p className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-widest mb-4">Credenciales</p>
                <div className="space-y-3">
                  {[
                    { label: "Cédula Profesional", value: "7840268" },
                    { label: "Especialidad", value: "Ortopedia" },
                    { label: "Sub-especialidad", value: "Columna Vertebral" },
                    { label: "Experiencia", value: "+10 años" },
                  ].map((c) => (
                    <div key={c.label}>
                      <p className="text-[10px] text-[#94a3b8] font-medium">{c.label}</p>
                      <p className="text-sm font-semibold text-[#0c1829]">{c.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom accent */}
              <div className="absolute -bottom-5 left-8 right-8 h-10 bg-[#2563EB]/10 rounded-2xl blur-xl -z-10" />
            </div>

            {/* Bio */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-xs font-bold uppercase tracking-[0.1em] mb-6">
                Sobre el Doctor
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0c1829] leading-tight mb-6">
                Dr. Jaime<br />
                <span className="text-[#2563EB]">Galván Alaniz</span>
              </h2>
              <p className="text-[#475569] leading-[1.8] mb-5">
                Médico cirujano especialista en Ortopedia y Cirugía de Columna con más de diez años de experiencia clínica y quirúrgica. Formado en las mejores instituciones médicas de México, el Dr. Galván combina conocimiento técnico de vanguardia con un enfoque humanista en la atención al paciente.
              </p>
              <p className="text-[#475569] leading-[1.8] mb-10">
                Su práctica se centra en opciones terapéuticas mínimamente invasivas que reducen el tiempo de recuperación y mejoran los resultados a largo plazo, adaptando cada tratamiento a la situación individual de cada paciente con precisión y empatía.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Cirugía de columna vertebral",
                  "Ortopedia general",
                  "Hernias discales",
                  "Reemplazo articular",
                  "Lesiones deportivas",
                  "Fracturas complejas",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-sm text-[#475569]">
                    <div className="w-5 h-5 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#2563EB]" />
                    </div>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-xs font-bold uppercase tracking-[0.1em] mb-6">
              Servicios médicos
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0c1829] mb-4">
              Áreas de atención
            </h2>
            <p className="text-[#64748b] text-lg max-w-lg mx-auto leading-relaxed">
              Diagnóstico y tratamiento integral de condiciones de columna vertebral y sistema musculoesquelético.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white hover:border-[#2563EB]/25 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 hover:-translate-y-1.5 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eff6ff] group-hover:bg-[#2563EB] flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-[#0c1829] text-[15px] mb-2 leading-snug">{title}</h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0c1829] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left copy */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#93c5fd] text-xs font-bold uppercase tracking-[0.1em] mb-6">
                ¿Por qué elegirnos?
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Atención médica de excelencia y confianza
              </h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                El Dr. Galván combina años de experiencia quirúrgica con tecnología de vanguardia para ofrecerte los mejores resultados posibles, con un trato cercano y humano en cada etapa de tu recuperación.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold text-sm hover:text-white transition-colors group"
              >
                Agenda tu consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right — reasons */}
            <div className="space-y-4">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2563EB]/25 group-hover:bg-[#2563EB]/40 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-5 h-5 text-[#60a5fa]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-[15px] mb-1">{title}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section id="testimonios" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-xs font-bold uppercase tracking-[0.1em] mb-6">
              Testimonios
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0c1829] mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-[#64748b] text-lg max-w-lg mx-auto">
              La recuperación y el bienestar de nuestros pacientes es nuestra mayor satisfacción.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[rgba(15,23,42,0.07)] flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <StarRating count={t.rating} />
                <p className="text-[#475569] leading-[1.8] flex-1 italic text-[15px]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60a5fa] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0c1829]">{t.name}</p>
                    <p className="text-[11px] text-[#94a3b8]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-xs font-bold uppercase tracking-[0.1em] mb-6">
              Preguntas frecuentes
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0c1829] mb-4">
              Resolvemos tus dudas
            </h2>
            <p className="text-[#64748b] text-lg">
              Las respuestas a las preguntas más comunes de nuestros pacientes.
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-[rgba(15,23,42,0.09)] rounded-2xl overflow-hidden bg-[#fafafa] data-[state=open]:bg-white data-[state=open]:border-[#bfdbfe] transition-colors"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left group">
                  <span className="font-semibold text-[#0c1829] text-[15px] pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#eff6ff] group-data-[state=open]:bg-[#2563EB] flex items-center justify-center flex-shrink-0 transition-colors">
                    <ChevronDown className="w-4 h-4 text-[#2563EB] group-data-[state=open]:text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-none">
                  <div className="px-6 pb-5 text-[#64748b] leading-[1.8] text-sm border-t border-[rgba(15,23,42,0.06)] pt-4">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ─────────────────────────────────────────────── */}
      <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563EB] relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#60a5fa]/10 rounded-full blur-[50px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-[0.1em] mb-8">
            <Calendar className="w-3.5 h-3.5" />
            Agenda tu consulta
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Da el primer paso hacia tu recuperación
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Agenda tu consulta hoy mismo. El Dr. Galván está listo para escucharte y diseñar el mejor plan de tratamiento para ti.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+5216188049556"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white text-[#1d4ed8] font-bold text-[15px] hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Agendar cita
            </a>
            <a
              href="https://wa.me/+5216188049556"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white/15 text-white font-bold text-[15px] border-2 border-white/30 hover:bg-white/25 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>

          {/* Contact details */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Phone, label: "Teléfono", value: "+52 (618) 804 95 56" },
              { icon: Mail, label: "Correo electrónico", value: "contacto@drgalvan.mx" },
              { icon: MapPin, label: "Ubicación", value: "Durango, Durango, México" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white text-sm font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#060e1a] text-[#94a3b8] py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center">
                  <Bone className="w-[18px] h-[18px] text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm leading-tight">Dr. Jaime Galván Alaniz</p>
                  <p className="text-[11px] text-[#475569]">Ortopedia y Cirugía de Columna</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-[#64748b]">
                Especialista en ortopedia y cirugía de columna vertebral, comprometido con la salud y el bienestar de cada paciente con atención humana y tecnología de vanguardia.
              </p>
              <p className="text-xs mt-4 text-[#475569]">Cédula Profesional: <span className="text-[#64748b]">7840268</span></p>
              {/* Social icons */}
              <div className="flex gap-3 mt-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563EB] hover:border-[#2563EB] transition-all group"
                    aria-label="Social media"
                  >
                    <Icon className="w-4 h-4 text-[#64748b] group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <p className="text-white font-semibold text-sm mb-5">Servicios</p>
              <ul className="space-y-2.5 text-sm text-[#64748b]">
                {["Hernias de disco", "Dolor lumbar", "Cirugía de columna", "Lesiones deportivas", "Consulta ortopédica"].map((s) => (
                  <li key={s}>
                    <a href="#servicios" className="hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-white font-semibold text-sm mb-5">Contacto</p>
              <div className="space-y-3.5 text-sm text-[#64748b]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#2563EB]" />
                  <span>Durango, Durango, México</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#2563EB]" />
                  <span>+52 (618) 804 95 56</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 flex-shrink-0 text-[#2563EB]" />
                  <span>contacto@drgalvan.mx</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 flex-shrink-0 text-[#2563EB]" />
                  <a href="https://wa.me/+5216188049556" className="hover:text-white transition-colors">
                    WhatsApp directo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
            <p>© 2026 Dr. Jaime Galván Alaniz. Todos los derechos reservados.</p>
            <p>Cédula Profesional 7840268 · Secretaría de Salud México</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
