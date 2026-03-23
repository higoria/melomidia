import { motion, useScroll, useTransform } from "motion/react";
import { 
  TrendingUp, 
  Search, 
  Settings, 
  BarChart3, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  MessageSquare,
  Zap,
  Shield,
  Target,
  Users
} from "lucide-react";
import { useState, useRef } from "react";
import { Button, Card, Section, Badge } from "./components/UI";
import { cn } from "./lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  scrollY.on("change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Problema", href: "#problema" },
    { name: "Solução", href: "#solucao" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Resultados", href: "#resultados" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-dark-bg/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center font-display font-bold text-xl">M</div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">MELO AUTOPEÇAS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm">Falar com Especialista</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-dark-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/70"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">Falar com Especialista</Button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge>Agência Especialista em Mercado Livre</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Transformamos sua loja em uma <span className="text-gradient">máquina de vendas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
            Gestão completa e estratégica para autopeças. Dominamos o algoritmo do Mercado Livre para colocar seus produtos no topo e escalar seu faturamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Quero vender mais <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg">Ver cases de sucesso</Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-white/40 grayscale opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest">Parceiros:</span>
            <div className="flex gap-8">
              <div className="font-display font-black italic text-xl">MERCADO LIVRE</div>
              <div className="font-display font-black italic text-xl">FULL</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y, opacity }}
          className="relative hidden lg:block"
        >
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-10 z-20 glass p-4 rounded-2xl glow-blue"
          >
            <Zap className="text-brand-blue" size={32} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 z-20 glass p-4 rounded-2xl glow-gold"
          >
            <TrendingUp className="text-brand-gold" size={32} />
          </motion.div>

          <div className="relative z-10 glass rounded-3xl p-4 border-white/20 shadow-2xl">
            <div className="bg-dark-bg rounded-2xl overflow-hidden border border-white/10">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-white/30 font-mono tracking-tighter">MELO_DASHBOARD_V2.0</div>
              </div>
              <div className="p-8">
                <div className="flex items-end gap-4 mb-8">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-brand-blue to-brand-gold rounded-t-lg min-w-[20px]"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl">
                    <div className="text-[10px] text-white/40 uppercase mb-1">Vendas Mensais</div>
                    <div className="text-2xl font-display font-bold text-brand-gold">+245%</div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="text-[10px] text-white/40 uppercase mb-1">ROI Médio</div>
                    <div className="text-2xl font-display font-bold text-brand-blue">12.4x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative pieces */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Vendas Estagnadas",
      desc: "Sua loja não sai do lugar e os anúncios parecem invisíveis para os compradores.",
      icon: <TrendingUp className="text-red-500" />
    },
    {
      title: "Baixa Conversão",
      desc: "Muitos cliques, mas poucas vendas. Seus anúncios não passam confiança ou clareza.",
      icon: <AlertCircle className="text-orange-500" />
    },
    {
      title: "Falta de Tempo",
      desc: "Você perde horas com burocracia e gestão, deixando de focar no que realmente importa.",
      icon: <X className="text-red-400" />
    }
  ];

  return (
    <Section id="problema" className="relative">
      <div className="text-center mb-16">
        <Badge>O Cenário Atual</Badge>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Por que sua loja ainda <span className="text-white/40">não decolou?</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Vender autopeças no Mercado Livre exige mais do que apenas cadastrar produtos. Sem estratégia, você é apenas mais um no oceano.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <Card key={i} delay={i * 0.1} className="hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {p.icon}
            </div>
            <h3 className="text-xl font-display font-bold mb-4">{p.title}</h3>
            <p className="text-white/50 leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Solution = () => {
  const services = [
    {
      title: "Anúncios de Alta Performance",
      desc: "Copywriting persuasivo e imagens otimizadas que convertem visitantes em compradores.",
      icon: <Zap className="text-brand-gold" />
    },
    {
      title: "SEO Especializado",
      desc: "Indexação estratégica para que seus produtos apareçam nas primeiras buscas.",
      icon: <Search className="text-brand-blue" />
    },
    {
      title: "Gestão de Conta 360º",
      desc: "Cuidamos de tudo: desde o atendimento até a logística e reputação da conta.",
      icon: <Settings className="text-blue-400" />
    },
    {
      title: "Escala com Ads",
      desc: "Campanhas de Mercado Ads focadas em ROI positivo e crescimento acelerado.",
      icon: <BarChart3 className="text-purple-400" />
    }
  ];

  return (
    <Section id="solucao" className="bg-white/[0.02] rounded-[4rem]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge>Nossa Solução</Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Aceleramos seu <br /> <span className="text-gradient">Crescimento Digital</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Não somos apenas uma agência de marketing. Somos parceiros estratégicos que entendem o mercado de autopeças e as nuances do Mercado Livre.
          </p>
          <div className="space-y-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                  <p className="text-white/40 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass rounded-[3rem] p-8 aspect-square flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full">
              {/* Abstract Visual Representing Growth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-brand-blue/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-48 h-48 border-2 border-brand-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <TrendingUp size={120} className="text-brand-blue glow-blue" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Diagnóstico", desc: "Analisamos sua conta e identificamos gargalos." },
    { title: "Setup", desc: "Configuramos e otimizamos seus anúncios principais." },
    { title: "Otimização", desc: "Aplicamos SEO e estratégias de conversão." },
    { title: "Escala", desc: "Escalamos as vendas com tráfego pago e gestão." }
  ];

  return (
    <Section id="como-funciona">
      <div className="text-center mb-20">
        <Badge>Metodologia</Badge>
        <h2 className="text-4xl font-display font-bold">Caminho para o <span className="text-brand-gold">Sucesso</span></h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2" />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-6 border-brand-blue/30 text-xl font-display font-bold text-brand-blue">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-white/40 text-sm px-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Results = () => {
  const stats = [
    { label: "Vendas Geradas", value: "R$ 12M+", icon: <TrendingUp /> },
    { label: "Contas Gerenciadas", value: "150+", icon: <Users /> },
    { label: "ROI Médio", value: "12.4x", icon: <Target /> },
    { label: "Satisfação", value: "99%", icon: <Shield /> }
  ];

  return (
    <Section id="resultados" className="bg-brand-blue/5 rounded-[4rem] border border-brand-blue/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-brand-blue mb-4 flex justify-center opacity-50">{s.icon}</div>
            <div className="text-4xl md:text-5xl font-display font-bold mb-2">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Testimonials = () => {
  const items = [
    { name: "Ricardo Silva", role: "Dono da RS Autopeças", text: "A Melo Autopeças mudou o patamar da minha loja. Em 3 meses triplicamos o faturamento no Mercado Livre." },
    { name: "Ana Paula", role: "Gerente de E-commerce", text: "O suporte é impecável. Eles realmente entendem de autopeças, o que faz toda a diferença nos anúncios." },
    { name: "Marcos Oliveira", role: "Lojista", text: "Finalmente encontrei uma agência que entrega resultados reais, não apenas relatórios bonitos." }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <Badge>Prova Social</Badge>
        <h2 className="text-4xl font-display font-bold">Quem confia na <span className="text-brand-blue">Melo</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((t, i) => (
          <Card key={i} className="flex flex-col justify-between">
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Zap key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-white/70 italic leading-relaxed">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10" />
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const CTAFinal = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-gold/10 rounded-[4rem] -z-10" />
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Pronto para dominar o <br /> <span className="text-gradient">Mercado Livre?</span>
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Não deixe sua concorrência levar seus clientes. Comece hoje sua jornada de escala com especialistas.
        </p>
        <Button size="lg" className="px-12 py-6 text-xl">
          Quero uma Consultoria Gratuita
        </Button>
        <p className="mt-8 text-white/30 text-sm flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="text-brand-gold" /> Vagas limitadas para novos parceiros este mês
        </p>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center font-display font-bold text-xl">M</div>
            <span className="font-display font-bold text-xl tracking-tight">MELO AUTOPEÇAS</span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed mb-8">
            Especialistas em transformar lojas de autopeças em referências de vendas no Mercado Livre. Tecnologia, estratégia e resultados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue transition-colors"><MessageSquare size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><a href="#problema" className="hover:text-white transition-colors">Problema</a></li>
            <li><a href="#solucao" className="hover:text-white transition-colors">Solução</a></li>
            <li><a href="#como-funciona" className="hover:text-white transition-colors">Metodologia</a></li>
            <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li>contato@meloautopecas.com.br</li>
            <li>+55 (11) 99999-9999</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest font-bold">
        <span>© 2026 Melo Autopeças. Todos os direitos reservados.</span>
        <div className="flex gap-8">
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-blue/30">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Results />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </div>
  );
}
