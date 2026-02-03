import { Calendar, Clock, MapPin, MonitorPlay, TrendingUp, Infinity as MetaIcon, Linkedin, Instagram, Facebook, Bot, Clapperboard, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProgrammesSection = () => {
    const programmes = [
        {
            id: 1,
            title: "Mega Free Video Editing Webinar",
            date: "07/02/2026",
            time: "11:00 AM – 1:00 PM",
            location: "Ecraftz Info Solutions, Calicut",
            tools: [
                { icon: <Clapperboard className="w-6 h-6" />, name: "Premiere Pro" },
                { icon: <Layers className="w-6 h-6" />, name: "After Effects" },
                { icon: <Bot className="w-6 h-6" />, name: "AI Tools" },
            ],
            description: "Discover the future with Video Editing",
            cta: "Register Now",
            icon: <MonitorPlay className="w-12 h-12 text-primary mb-4" />,
        },
        {
            id: 2,
            title: "Free Webinar on AI-Integrated Digital Marketing",
            date: "07/02/2026",
            time: "2:00 PM – 4:00 PM",
            location: "Ecraftz Info Solutions, Calicut",
            tools: [
                { icon: <MetaIcon className="w-6 h-6" />, name: "Meta" },
                { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn" },
                { icon: <Instagram className="w-6 h-6" />, name: "Instagram" },
                { icon: <Facebook className="w-6 h-6" />, name: "Facebook" },
                { icon: <Bot className="w-6 h-6" />, name: "AI Tools" },
            ],
            description: "Master the roadmap to Career Growth",
            cta: "Enroll Now",
            icon: <TrendingUp className="w-12 h-12 text-accent mb-4" />,
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="programmes" className="relative py-24 overflow-hidden bg-background">
            {/* Background Gradients & Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                            <span className="gradient-text">E-Academy Programmes</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Elevate your skills with our expert-led webinars and training sessions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {programmes.map((programme, index) => (
                        <motion.div
                            key={programme.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 md:p-10 relative z-10">
                                <div className="flex flex-col items-start h-full">
                                    <div className="mb-6 p-4 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                                        {programme.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-display">
                                        {programme.title}
                                    </h3>

                                    <div className="space-y-4 mb-8 w-full">
                                        <div className="flex items-center text-muted-foreground">
                                            <Calendar className="w-5 h-5 mr-3 text-primary" />
                                            <span>{programme.date}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <Clock className="w-5 h-5 mr-3 text-primary" />
                                            <span>{programme.time}</span>
                                        </div>
                                        <div className="flex items-start text-muted-foreground">
                                            <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                                            <span>{programme.location}</span>
                                        </div>
                                    </div>

                                    <div className="mb-8 w-full">
                                        <h4 className="font-semibold text-foreground mb-4">Tools Covered:</h4>
                                        <div className="flex flex-wrap gap-4">
                                            {programme.tools.map((tool, idx) => (
                                                <div key={idx} className="flex flex-col items-center group/tool relative">
                                                    <div className="p-3 rounded-lg bg-secondary/50 text-muted-foreground group-hover/tool:text-primary group-hover/tool:scale-110 transition-all duration-300 border border-border/50 group-hover/tool:border-primary/50">
                                                        {tool.icon}
                                                    </div>
                                                    <span className="text-xs font-medium text-foreground mt-2 opacity-0 group-hover/tool:opacity-100 transition-opacity absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-popover border border-border px-2 py-1 rounded shadow-lg z-20 pointer-events-none">
                                                        {tool.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-8 text-muted-foreground italic border-l-2 border-primary/50 pl-4">
                                            "{programme.description}"
                                        </p>
                                    </div>

                                    <div className="w-full mt-auto">
                                        <Button
                                            onClick={scrollToContact}
                                            className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 transform group-hover:-translate-y-1"
                                        >
                                            {programme.cta}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgrammesSection;
