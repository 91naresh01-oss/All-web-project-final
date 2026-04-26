'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
    Tag, Users, Zap, Sparkles, Wind, MapPin, Link as LinkIcon,
    MessageCircleWarning, Info, Gem, Package, Group, Beaker, Atom,
    CheckCircle, AlertTriangle, FileText, Anchor, Crown,
    Lightbulb, MessageSquareQuote, Palette, Layers, ChevronRight, PenTool,
    Star, BookOpen, Brain, List, Globe, Hash
} from 'lucide-react';
import { useAppState } from '@/context/app-context';

// --- INTERFACES (Unchanged) ---
export interface TopicData {
    id: string;
    title: string;
    description?: string;
    content: ContentBlock[];
    tenses?: Tense[];
    summary_table?: SummaryTableData;
    confusion_section?: ConfusionSectionData;
}

export interface ContentBlock {
    type: 'heading' | 'paragraph' | 'list' | 'note' | 'table' | 'part_of_speech_section' | 'special_rules_section' | 'interchange_rules_section' | 'tense_section' | 'sentence_structures_section' | 'rules_table_section' | 'example_section' | 'example_table';
    content: any;
    title?: string;
}

interface SectionData {
    title: string;
    english_title?: string;
    description: string;
    types?: string[];
    usage?: string;
    examples?: { items: string[] };
    sentence?: string;
    pro_tip?: string;
}

interface TableData {
    title?: string;
    headers: string[];
    rows: (string[] | { [key: string]: any })[];
}

interface SummaryTableData {
    title?: string;
    headers: string[];
    rows: SummaryTableRow[];
}

interface SummaryTableRow {
    tense_name: string;
    sub_name: string;
    formula: string;
    example_guj?: string;
    usage?: string;
    keywords?: string;
    example?: string;
}

interface ConfusionSectionData {
    title: string;
    items: ConfusionItem[];
}

interface ConfusionItem {
    title: string;
    comparison: {
        tense: string;
        note: string;
        example: string;
    }[];
    extra_examples?: {
        sentence: string;
        explanation: string;
    }[];
}

interface Structure {
    positive: { formula: string; example: string; gujarati_example: string };
    negative: { formula: string; example: string; gujarati_example: string };
    question: { formula: string; example: string; gujarati_example: string };
}

interface Rule {
    type: string;
    title: string;
    content?: string;
    items?: string[];
    example_wrong?: string;
    example_right?: string;
}

interface Usage {
    rule: string;
    eng: string;
    guj: string;
}

interface Tense {
    id: string;
    title: string;
    gujarati_title: string;
    icon: string;
    theme_color: string;
    bg_color: string;
    description: string;
    keywords: string[];
    structure: Structure;
    rules: Rule[];
    usage: Usage[];
}


// --- PLAN B: DEEP GRADIENT THEMES (Compact Optimized) ---

const iconMap: { [key: string]: React.ElementType } = {
    'Noun': Tag, 'Pronoun': Users, 'Verb': Zap, 'Adjective': Sparkles, 'Adverb': Wind,
    'Preposition': MapPin, 'Conjunction': LinkIcon, 'Interjection': MessageCircleWarning,
    'મૂળભૂત ખ્યાલ': Info, 'Basic Concept': Info,
    'Proper Noun': Gem, 'Common Noun': Package, 'Collective Noun': Group,
    'Material Noun': Beaker, 'Abstract Noun': Atom,
    'default': Sparkles,
};

const gradientThemes = {
    passion: {
        header: 'bg-gradient-to-r from-rose-500 via-red-600 to-orange-500',
        iconBg: 'bg-white/20',
        border: 'border-rose-200',
        text: 'text-rose-800',
        accent: 'bg-rose-50',
        highlight: 'text-rose-600'
    },
    ocean: {
        header: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500',
        iconBg: 'bg-white/20',
        border: 'border-blue-200',
        text: 'text-blue-900',
        accent: 'bg-blue-50',
        highlight: 'text-blue-700'
    },
    nature: {
        header: 'bg-gradient-to-r from-emerald-500 via-green-600 to-teal-500',
        iconBg: 'bg-white/20',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        accent: 'bg-emerald-50',
        highlight: 'text-emerald-700'
    },
    royal: {
        header: 'bg-gradient-to-r from-violet-600 via-purple-700 to-fuchsia-500',
        iconBg: 'bg-white/20',
        border: 'border-purple-200',
        text: 'text-purple-900',
        accent: 'bg-purple-50',
        highlight: 'text-purple-700'
    },
    midnight: {
        header: 'bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900',
        iconBg: 'bg-white/10',
        border: 'border-slate-300',
        text: 'text-slate-800',
        accent: 'bg-slate-100',
        highlight: 'text-slate-900'
    },
    sunset: {
        header: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500',
        iconBg: 'bg-white/20',
        border: 'border-orange-200',
        text: 'text-orange-900',
        accent: 'bg-orange-50',
        highlight: 'text-orange-700'
    },
    berry: {
        header: 'bg-gradient-to-r from-pink-600 via-rose-500 to-red-500',
        iconBg: 'bg-white/20',
        border: 'border-pink-200',
        text: 'text-pink-900',
        accent: 'bg-pink-50',
        highlight: 'text-pink-700'
    },
    breeze: {
        header: 'bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500',
        iconBg: 'bg-white/20',
        border: 'border-cyan-200',
        text: 'text-cyan-900',
        accent: 'bg-cyan-50',
        highlight: 'text-cyan-700'
    },
    fresh: {
        header: 'bg-gradient-to-r from-lime-500 via-green-500 to-emerald-600',
        iconBg: 'bg-white/20',
        border: 'border-lime-200',
        text: 'text-green-900',
        accent: 'bg-lime-50',
        highlight: 'text-green-700'
    },
    deep: {
        header: 'bg-gradient-to-r from-indigo-900 via-violet-900 to-slate-900',
        iconBg: 'bg-white/10',
        border: 'border-indigo-200',
        text: 'text-indigo-900',
        accent: 'bg-indigo-50',
        highlight: 'text-indigo-800'
    },
    solar: {
        header: 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500',
        iconBg: 'bg-white/20',
        border: 'border-orange-200',
        text: 'text-orange-900',
        accent: 'bg-orange-50',
        highlight: 'text-orange-800'
    },
    nebula: {
        header: 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600',
        iconBg: 'bg-white/20',
        border: 'border-purple-200',
        text: 'text-purple-900',
        accent: 'bg-purple-50',
        highlight: 'text-purple-800'
    },
    tropical: {
        header: 'bg-gradient-to-r from-teal-500 via-emerald-500 to-green-600',
        iconBg: 'bg-white/20',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        accent: 'bg-emerald-50',
        highlight: 'text-emerald-800'
    }
};

const getThemeByKey = (key: string) => {
    const k = key.toLowerCase();

    // Article Specifics (Custom Colors) (Moved to top for priority)
    if (k.includes("introduction") || k.includes("shu che")) return gradientThemes.ocean; // Blue
    if (k.includes("'an'")) return gradientThemes.sunset;   // Orange
    if (k.includes("'the'")) return gradientThemes.nature;  // Green
    if (k.includes("'a'") && !k.includes("part")) return gradientThemes.royal; // Purple (avoid matching 'part')
    if (k.includes("confusion") || k.includes("confusing")) return gradientThemes.berry; // Pink/Red

    // Tense Specifics (Priority for vibrant themes)
    if (k.includes('present')) return gradientThemes.passion;  // Red/Rose
    if (k.includes('past')) return gradientThemes.royal;       // Purple/Violet
    if (k.includes('future')) return gradientThemes.breeze;    // Sky/Blue

    // Grammar Topics
    if (k.includes('active') || k.includes('passive')) return gradientThemes.fresh; // Green/Lime
    if (k.includes('noun')) return gradientThemes.ocean;       // Blue/Cyan
    if (k.includes('verb')) return gradientThemes.passion;     // Red/Rose
    if (k.includes('adjective')) return gradientThemes.nebula;  // Purple/Fuchsia (Vibrant)
    if (k.includes('adverb')) return gradientThemes.solar;    // Orange/Yellow (Bright)
    if (k.includes('preposition')) return gradientThemes.tropical; // Teal/Emerald
    if (k.includes('conjunction')) return gradientThemes.royal;  // Violet/Purple
    if (k.includes('interjection')) return gradientThemes.berry; // Pink/Red
    if (k.includes('pronoun')) return gradientThemes.breeze;     // Sky/Blue
    if (k.includes('article')) return gradientThemes.sunset;    // Orange/Amber
    if (k.includes('shop')) return gradientThemes.midnight;    // Slate/Black
    if (k.includes('rule')) return gradientThemes.midnight;
    if (k.includes('summary')) return gradientThemes.deep; // Added for summary tables

    // Fallback based on first letter char code for consistent randomness
    const themes = Object.values(gradientThemes);
    return themes[key.length % themes.length];
};

const formatHtmlString = (str: string): string => {
    if (!str) return '';
    return str
        .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-slate-900">$1</span>')
        .replace(/`(.*?)`/g, '<code class="bg-slate-50 text-pink-600 px-1 py-0.5 rounded text-xs font-mono font-bold border border-slate-200">$1</code>')
        .replace(/\[(.*?)\]/g, '<span class="text-indigo-700 font-bold">$1</span>');
};

// --- COMPACT COMPONENTS ---

const HeadingBlock = ({ content }: { content: string }) => {
    const cleanContent = content.replace(/^\d+\.\s*/, '').split('(')[0].trim();
    const theme = getThemeByKey(cleanContent);
    const Icon = iconMap[cleanContent] || Layers;

    const match = content.match(/^(.*?)\s*\((.*?)\)\s*$/);
    const englishTitle = match ? match[1].trim() : content;
    const gujaratiTitle = match ? match[2].trim() : null;

    if (!gujaratiTitle && content.includes('શું છે')) return (
        <h3 className="text-lg font-bold text-slate-700 mt-6 mb-3 border-l-4 border-indigo-500 pl-3 bg-indigo-50/50 py-1.5 rounded-r">
            {content}
        </h3>
    );

    return (
        <div className={`mt-10 mb-5 rounded-xl overflow-hidden shadow-md mx-1`}>
            <div className={`${theme.header} px-3 py-3 flex items-center gap-3 text-white`}>
                <div className={`${theme.iconBg} p-1.5 rounded-lg backdrop-blur-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h2 className="text-lg font-bold tracking-tight leading-tight">{englishTitle}</h2>
                    {gujaratiTitle && <p className="text-[11px] font-bold opacity-90 text-white/90">{gujaratiTitle}</p>}
                </div>
            </div>
        </div>
    );
};

const ParagraphBlock = ({ content }: { content: string }) => (
    <div className="my-3 bg-white p-3.5 rounded-lg border border-slate-100 shadow-sm leading-relaxed text-slate-700 font-medium">
        <div dangerouslySetInnerHTML={{ __html: formatHtmlString(content) }} />
    </div>
);

const ListBlock = ({ content }: { content: (string | { text: string; translation: string })[] }) => {
    if (!Array.isArray(content)) return null;
    return (
        <ul className="grid gap-2 my-4">
            {content.map((item, i) => {
                const isObject = typeof item === 'object' && item !== null;
                const textContent = isObject ? (item as any).text : item;
                const translation = isObject ? (item as any).translation : null;

                // Clean numbering if present to avoid duplication with the badge
                const cleanText = textContent.replace(/^\d+\.\s*/, '');

                return (
                    <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                        <div className="mt-1 w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                            {i + 1}
                        </div>
                        <div className="flex flex-col pt-0.5 w-full">
                            <span className="text-slate-800 font-medium leading-tight" dangerouslySetInnerHTML={{ __html: formatHtmlString(cleanText) }} />
                            {translation && (
                                <span className="text-slate-500 text-sm font-medium mt-1 leading-snug" dangerouslySetInnerHTML={{ __html: formatHtmlString(translation) }} />
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

const NoteBlock = ({ content }: { content: string }) => (
    <div className="my-5 rounded-lg overflow-hidden shadow-sm border-l-4 border-amber-500 bg-amber-50">
        <div className="bg-amber-100 px-3 py-1 font-bold text-amber-800 text-xs uppercase tracking-widest flex items-center gap-1.5">
            <Lightbulb className="w-3 h-3" /> Pro Tip
        </div>
        <div className="p-3.5">
            <div className="text-slate-800 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </div>
);

const TableBlock = ({ content }: { content: TableData }) => {
    if (!content.rows || !content.headers) return null;

    // Function to render cell content with special handling for +/-/? icons
    const renderCellContent = (cell: string, isFirstColumn: boolean) => {
        const cellStr = String(cell);

        // Check for +, -, ? symbols in first column
        if (isFirstColumn) {
            if (cellStr.includes('color: green') || cellStr.includes('>+<')) {
                return (
                    <span className="text-2xl font-bold text-green-500">+</span>
                );
            }
            if (cellStr.includes('color: red') || cellStr.includes('>-<')) {
                return (
                    <span className="text-2xl font-bold text-red-500">−</span>
                );
            }
            if (cellStr.includes('color: blue') || cellStr.includes('>?<')) {
                return (
                    <span className="text-2xl font-bold text-blue-500">?</span>
                );
            }
        }

        return <div dangerouslySetInnerHTML={{ __html: formatHtmlString(cellStr) }} />;
    };

    return (
        <Card className="my-6 border-0 shadow-xl overflow-hidden rounded-2xl mx-1">
            {content.title && (
                <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 px-4 py-3 flex items-center gap-2.5">
                    <Palette className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-base tracking-wide" dangerouslySetInnerHTML={{ __html: content.title }} />
                </div>
            )}
            <div className="overflow-x-auto bg-slate-50/50">
                <Table className="w-full min-w-[300px]">
                    <TableHeader>
                        <TableRow className="bg-white border-b-2 border-slate-200">
                            {content.headers.map((h, i) => (
                                <TableHead
                                    key={i}
                                    className={cn(
                                        "h-auto py-3 px-2 md:px-4 text-xs md:text-xs font-black uppercase tracking-wider align-middle leading-tight",
                                        i === 0 ? "text-slate-500 text-center whitespace-nowrap" : "text-slate-700"
                                    )}
                                    dangerouslySetInnerHTML={{ __html: h }}
                                />
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {content.rows.map((row, i) => {
                            const rowArray = Array.isArray(row) ? row : Object.values(row);
                            return (
                                <TableRow
                                    key={i}
                                    className={cn(
                                        "border-b border-slate-100 last:border-0",
                                        i % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                                    )}
                                >
                                    {rowArray.map((cell: any, j: number) => (
                                        <TableCell
                                            key={j}
                                            className={cn(
                                                "py-2.5 px-2 md:py-3 md:px-3 text-sm md:text-sm font-medium text-slate-700 border-r border-slate-100 last:border-0 align-top leading-relaxed",
                                                j === 0 && "text-center align-middle whitespace-nowrap"
                                            )}
                                        >
                                            {renderCellContent(String(cell), j === 0)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
};


const PartOfSpeechSection = ({ content: section }: { content: SectionData }) => {
    const cleanTitle = section.title.replace(/^\d+\.\s*/, '').split('(')[0].trim();
    const themes = [
        gradientThemes.passion, gradientThemes.ocean, gradientThemes.nature, gradientThemes.royal,
        gradientThemes.midnight, gradientThemes.sunset, gradientThemes.berry, gradientThemes.breeze,
        gradientThemes.fresh, gradientThemes.deep
    ];
    const theme = themes[cleanTitle.length % themes.length];
    const Icon = iconMap[cleanTitle] || Layers;

    return (
        <div className="my-8 shadow-md rounded-2xl overflow-hidden bg-white border border-slate-100 mx-1">
            <div className={`${theme.header} p-5 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-2 opacity-10 transform scale-125">
                    <Icon className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10">
                    <span className="text-[10px] font-black text-white/80 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded mb-1.5 inline-block">Theory</span>
                    <h2 className="text-xl md:text-2xl font-black text-white leading-tight" dangerouslySetInnerHTML={{ __html: section.title }} />
                </div>
            </div>

            <CardContent className="p-2 md:p-6 space-y-6">
                <div className="text-slate-700 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: formatHtmlString(section.description) }} />

                {section.types && (
                    <div className="flex flex-wrap gap-2">
                        {section.types.map((type, i) => (
                            <Badge key={i} className={`text-xs px-3 py-1 rounded-lg bg-white border ${theme.border} ${theme.highlight} font-bold shadow-sm`}>
                                {type}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className={cn("grid gap-4", section.examples?.items && section.sentence ? "md:grid-cols-2" : "grid-cols-1")}>
                    {section.examples?.items && (
                        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                            <div className="bg-slate-200/50 px-3 py-1.5 font-bold text-slate-600 uppercase text-[10px] tracking-widest">Examples</div>
                            <div className="p-3 flex flex-wrap gap-2">
                                {section.examples.items.map((ex, i) => (
                                    <span key={i} className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-[13.5px] font-bold text-slate-700 shadow-sm">
                                        {ex}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {section.sentence && (
                        <div className={`rounded-xl border ${theme.border} ${theme.accent} overflow-hidden`}>
                            <div className={`px-3 py-1.5 font-bold uppercase text-[10px] tracking-widest ${theme.highlight} bg-white/50`}>Usage</div>
                            <div className="p-3 flex items-start justify-start min-h-[60px]">
                                <p className={`text-[16px] text-black leading-tight text-left`} dangerouslySetInnerHTML={{ __html: formatHtmlString(section.sentence) }} />
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </div>
    );
};

const ExampleSectionBlock = ({ content }: { content: { title?: string; examples: string[] } }) => {
    if (!content?.examples?.length) return null;
    return (
        <div className="my-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-5 border border-pink-100 shadow-sm">
            {content.title && (
                <h3 className="font-bold text-pink-600 mb-3 flex items-center gap-2 text-xs uppercase tracking-wide border-b border-pink-200/50 pb-1.5">
                    <PenTool className="h-3.5 w-3.5" />
                    <span dangerouslySetInnerHTML={{ __html: content.title }} />
                </h3>
            )}
            <div className="space-y-2">
                {content.examples.map((item, i) => (
                    <div key={i} className="flex gap-2.5 items-start bg-white/80 p-2.5 rounded-lg border border-pink-100 shadow-xs">
                        <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5 bg-orange-100 rounded-full p-0.5" />
                        <span className="text-slate-800 font-medium leading-snug" dangerouslySetInnerHTML={{ __html: formatHtmlString(item) }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const TenseCard = ({ tense }: { tense: Tense }) => {
    const title = tense.title.toLowerCase();
    const isPresent = title.includes('present');
    const isPast = title.includes('past');
    const isFuture = title.includes('future');
    const isSimple = title.includes('simple') || (!title.includes('continuous') && !title.includes('perfect'));
    const isContinuous = title.includes('continuous') && !title.includes('perfect');
    const isPerfect = title.includes('perfect') && !title.includes('continuous');
    const isPerfectContinuous = title.includes('perfect') && title.includes('continuous');

    let theme = gradientThemes.deep; // Default/Fallback

    // Present Tenses (Warm/Red/Pink/Orange)
    if (isPresent) {
        if (isSimple) theme = gradientThemes.passion;      // Rose/Red
        else if (isContinuous) theme = gradientThemes.berry;    // Pink
        else if (isPerfect) theme = gradientThemes.sunset;      // Orange
        else if (isPerfectContinuous) theme = gradientThemes.deep; // Dark Indigo
    }
    // Past Tenses (Cool/Purple/Blue/Dark)
    else if (isPast) {
        if (isSimple) theme = gradientThemes.royal;        // Violet/Purple
        else if (isContinuous) theme = gradientThemes.midnight; // Slate/Dark
        else if (isPerfect) theme = gradientThemes.ocean;       // Blue/Indigo
        else if (isPerfectContinuous) theme = gradientThemes.deep;
    }
    // Future Tenses (Fresh/Green/Sky)
    else if (isFuture) {
        if (isSimple) theme = gradientThemes.breeze;       // Sky/Cyan
        else if (isContinuous) theme = gradientThemes.fresh;    // Lime/Green
        else if (isPerfect) theme = gradientThemes.nature;      // Emerald
        else if (isPerfectContinuous) theme = gradientThemes.deep;
    }

    return (
        <section className="my-16 scroll-mt-24">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 mx-1">
                <div className={`${theme.header} p-3 md:p-5 text-white flex items-center gap-3`}>
                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                        <span className="text-xl md:text-2xl">{tense.icon}</span>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight">{tense.title}</h2>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/90">{tense.gujarati_title}</p>
                    </div>
                </div>

                <div className="p-1 md:p-6 space-y-4">
                    <div className="grid divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                        {[
                            { label: 'Positive', symbol: '+', data: tense.structure.positive, color: 'bg-emerald-600', text: 'text-emerald-700', light: 'bg-emerald-50/30' },
                            { label: 'Negative', symbol: '-', data: tense.structure.negative, color: 'bg-rose-600', text: 'text-rose-700', light: 'bg-rose-50/30' },
                            { label: 'Question', symbol: '?', data: tense.structure.question, color: 'bg-blue-600', text: 'text-blue-700', light: 'bg-blue-50/30' },
                        ].map((item, i) => (
                            <div key={i} className={`p-2 md:p-5 ${item.light}`}>
                                <div className="flex items-center gap-2 mb-2.5">
                                    <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-black text-white shadow-sm ${item.color}`}>
                                        {item.symbol}
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-widest ${item.text}`}>{item.label}</span>
                                </div>
                                <div className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 mb-2 text-slate-800 shadow-xs font-bold font-mono text-sm inline-block">
                                    {item.data.formula}
                                </div>
                                <p className="font-bold text-slate-900 border-none leading-tight mb-1">{item.data.example}</p>
                                <p className="text-xs text-slate-500 font-medium italic">{item.data.gujarati_example}</p>
                            </div>
                        ))}
                    </div>

                    {tense.rules.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-black text-slate-800 px-1 border-b border-slate-100 pb-2">Rules & Usage</h3>
                            <div className="grid gap-3">
                                {tense.rules.map((rule, i) => (
                                    <div key={i} className="flex gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs hover:border-slate-200 transition-all">
                                        <div className="shrink-0">
                                            {rule.type === 'golden_rule' ?
                                                <div className="bg-amber-100 p-2 rounded-lg"><Crown className="w-5 h-5 text-amber-600" /></div> :
                                                <div className="bg-indigo-100 p-2 rounded-lg"><Info className="w-5 h-5 text-indigo-600" /></div>
                                            }
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-slate-800 text-lg mb-1">{rule.title}</h4>
                                            {rule.content && <p className="text-slate-600 leading-relaxed mb-2">{rule.content}</p>}

                                            {rule.example_wrong && (
                                                <div className="bg-slate-50 rounded-lg border border-slate-100 p-2.5 text-sm space-y-1.5">
                                                    <div className="flex gap-2 items-center text-slate-500">
                                                        <span className="text-red-500 font-bold">✕</span> <span className="line-through">{rule.example_wrong}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center text-slate-900 font-bold">
                                                        <span className="text-green-600">✓</span> <span>{rule.example_right}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {rule.items && (
                                                <ul className="mt-2 space-y-1.5 border-t border-slate-50 pt-2">
                                                    {rule.items.map((item, j) => (
                                                        <li key={j} className="text-sm text-slate-700 flex items-start gap-2">
                                                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const SectionBlock = ({ content }: { content: { title: string; content: ContentBlock[] } }) => {
    const cleanTitle = content.title.replace(/^\d+\.\s*/, '').split('(')[0].trim();
    const theme = getThemeByKey(cleanTitle);

    return (
        <section className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white mx-1">
            <div className={`${theme.header} px-5 py-4 flex items-center gap-3 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-2 opacity-10 transform scale-125 translate-x-1/4 -translate-y-1/4">
                    <Layers className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10 flex flex-col">
                    <h2 className="text-xl md:text-2xl font-black text-white leading-tight drop-shadow-sm" dangerouslySetInnerHTML={{ __html: content.title }} />
                </div>
            </div>
            <div className="p-2 md:p-6 space-y-6">
                <BlockList blocks={content.content} />
            </div>
        </section>
    );
};

// Extracted for recursion
const RenderBlock = ({ block, index }: { block: ContentBlock; index: number }) => {
    switch (block.type) {
        case 'heading': return <HeadingBlock key={index} content={block.content} />;
        case 'paragraph': return <ParagraphBlock key={index} content={block.content} />;
        case 'list': return <ListBlock key={index} content={block.content} />;
        case 'note': return <NoteBlock key={index} content={block.content} />;
        case 'table':
        case 'rules_table_section':
        case 'example_table': return <TableBlock key={index} content={block.content} />;
        case 'part_of_speech_section': return <PartOfSpeechSection key={index} content={block.content} />;
        case 'example_section': return <ExampleSectionBlock key={index} content={block.content} />;
        // @ts-ignore - Section type might not be in the strict interface yet but we support it
        case 'section': return <SectionBlock key={index} content={{ title: block.title || '', content: block.content }} />;
        default: return null;
    }
};

const BlockList = ({ blocks }: { blocks: ContentBlock[] }) => (
    <>
        {blocks.map((block, index) => (
            <RenderBlock key={index} block={block} index={index} />
        ))}
    </>
);

const UnifiedRenderer = ({ topicData, topicId }: { topicData: TopicData; topicId: string }) => {
    const { fontSize } = useAppState();
    const blocks = topicData?.content || [];
    const summary_table = topicData?.summary_table;
    const confusion_section = topicData?.confusion_section;
    const tenses = topicData?.tenses;

    if (!blocks.length && !tenses?.length && !summary_table && !confusion_section) return <div className="py-20 text-center text-slate-400">Loading...</div>;

    return (
        <div className={cn("w-full max-w-3xl mx-auto space-y-6 pb-20", fontSize)}>
            <BlockList blocks={blocks} />

            {tenses?.map((tense, index) => <TenseCard key={index} tense={tense} />)}

            {summary_table && (
                <div className="mt-16">
                    <h3 className="text-xl font-black text-center text-slate-800 mb-6 flex items-center justify-center gap-3">
                        <Zap className="w-5 h-5 text-yellow-500" /> Quick Summary
                    </h3>
                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-md">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gradient-to-r from-indigo-900 via-violet-900 to-slate-900 border-none">
                                        {summary_table.headers.map((h, i) => (
                                            <TableHead key={i} className="h-12 px-4 text-sm font-black text-white uppercase tracking-wider py-2">{h}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {summary_table.rows.map((row: any, i) => {
                                        // Handles [tense, active, passive] array format
                                        if (Array.isArray(row)) {
                                            return (
                                                <TableRow key={i} className="bg-white border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                                    {row.map((cell: any, j: number) => (
                                                        <TableCell key={j} className="p-2 md:p-4 text-base md:text-sm font-medium text-slate-700">
                                                            <div dangerouslySetInnerHTML={{ __html: formatHtmlString(cell) }} />
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            );
                                        }

                                        // Handles new format with usage/keywords
                                        if (row.usage || row.keywords) {
                                            return (
                                                <TableRow key={i} className="bg-white border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                                    <TableCell className="font-bold text-slate-900 text-base md:text-sm p-2 md:p-4">
                                                        {(() => {
                                                            if (typeof row.tense_name === 'string' && row.tense_name.includes('(')) {
                                                                const parts = row.tense_name.split('(');
                                                                const english = parts[0];
                                                                const translation = '(' + parts.slice(1).join('(');
                                                                return (
                                                                    <div>
                                                                        <div>{english}</div>
                                                                        <div className="text-xs text-slate-500 font-normal mt-0.5">{translation}</div>
                                                                    </div>
                                                                );
                                                            }
                                                            return row.tense_name;
                                                        })()}
                                                    </TableCell>
                                                    <TableCell className="text-base md:text-sm text-slate-700 p-2 md:p-4">{row.usage}</TableCell>
                                                    <TableCell className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded inline-block m-2 md:m-0 w-fit">{row.keywords}</TableCell>
                                                    <TableCell className="text-base md:text-sm text-slate-800 p-2 md:p-4">
                                                        {(() => {
                                                            if (typeof row.example === 'string' && row.example.includes('(')) {
                                                                const parts = row.example.split('(');
                                                                const english = parts[0];
                                                                const translation = '(' + parts.slice(1).join('(');
                                                                return (
                                                                    <div>
                                                                        <div>{english}</div>
                                                                        <div className="text-xs text-slate-500 mt-1">{translation}</div>
                                                                    </div>
                                                                );
                                                            }
                                                            return row.example;
                                                        })()}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        }

                                        // Handles object format {tense_name, formula, etc.}
                                        return (
                                            <TableRow key={i} className="bg-white border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                                <TableCell className="font-bold text-slate-900 text-base md:text-sm p-2 md:p-4">{row.tense_name}</TableCell>
                                                <TableCell className="p-2 md:p-4">
                                                    <Badge variant="outline" className="text-sm font-mono font-bold px-2 py-0.5 bg-indigo-50 border-indigo-100 text-indigo-700">
                                                        {row.formula}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-base md:text-sm text-slate-800 p-2 md:p-4">{row.example_eng}</TableCell>
                                                <TableCell className="text-sm text-slate-500 italic p-2 md:p-4">{row.example_guj}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            )}

            {confusion_section && (
                <div className="mt-16">
                    <h3 className="text-xl font-black text-center text-slate-800 mb-6 flex items-center justify-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500" /> {confusion_section.title || "Common Confusions"}
                    </h3>
                    <div className="grid gap-6">
                        {confusion_section.items.map((item, i) => (
                            <Card key={i} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-orange-50/50 border-b border-orange-100 pb-3">
                                    <CardTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                        {item.comparison.map((comp, j) => (
                                            <div key={j} className="p-4 md:p-6 space-y-3">
                                                <div className="font-bold text-indigo-700 text-sm tracking-wide uppercase mb-1">
                                                    {comp.tense}
                                                </div>
                                                <div className="text-slate-700 text-sm leading-relaxed min-h-[40px]">
                                                    {comp.note}
                                                </div>
                                                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 italic">
                                                    "{comp.example}"
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {item.extra_examples && item.extra_examples.length > 0 && (
                                        <div className="bg-slate-50 border-t border-slate-100 p-4 md:p-6">
                                            <h4 className="font-bold text-slate-800 text-sm mb-3">More Examples:</h4>
                                            <ul className="space-y-3">
                                                {item.extra_examples.map((ex, k) => (
                                                    <li key={k} className="text-sm">
                                                        <div className="font-medium text-slate-900">{ex.sentence}</div>
                                                        <div className="text-slate-500 text-xs mt-0.5">👉 {ex.explanation}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnifiedRenderer;
