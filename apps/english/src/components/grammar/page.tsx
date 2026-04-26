
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Brain, TestTube2, BookCopy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAppState } from '@/context/app-context';
import { cn } from '@/lib/utils';

interface TopicMeta {
  id: string;
  folder: string;
  title: string;
  label: string;
  lang: string;
}

const hardcodedTopics: TopicMeta[] = [
    { id: 'active-passive-voice-gu', folder: 'active-passive-voice-gu', title: 'Active-Passive Voice (કર્તરિ-કર્મણિ પ્રયોગ)', label: 'Active-Passive Voice - કર્તરિ-કર્મણિ પ્રયોગ', lang: 'gu' },
    { id: 'adjectives-gu', folder: 'adjectives-gu', title: 'Adjectives (વિશેષણ)', label: 'Adjectives - વિશેષણ', lang: 'gu' },
    { id: 'adverbs-gu', folder: 'adverbs-gu', title: 'Adverbs (ક્રિયાવિશેષણ)', label: 'Adverbs - ક્રિયાવિશેષણ', lang: 'gu' },
    { id: 'animals-gu', folder: 'animals-gu', title: 'Animals (પ્રાણીઓ)', label: 'Animals - પ્રાણીઓ', lang: 'gu' },
    { id: 'articles-gu', folder: 'articles-gu', title: 'Articles (A, An, The)', label: 'Articles - A, An, The', lang: 'gu' },
    { id: 'auxiliary-verbs-gu', folder: 'auxiliary-verbs-gu', title: 'Auxiliary Verbs (സഹായക ക്രിയകൾ)', label: 'Auxiliary Verbs', lang: 'gu' },
    { id: 'conjunctions-gu', folder: 'conjunctions-gu', title: 'Conjunctions (સંયોજકો)', label: 'Conjunctions - સંયોજકો', lang: 'gu' },
    { id: 'degree-of-comparison-gu', folder: 'degree-of-comparison-gu', title: 'Degree of Comparison (તુલનાની કક્ષાઓ)', label: 'Degree of Comparison - તુલનાની કક્ષાઓ', lang: 'gu' },
    { id: 'direct-indirect-speech-gu', folder: 'direct-indirect-speech-gu', title: 'Direct-Indirect Speech (પ્રત્યક્ષ-પરોક્ષ કથન)', label: 'Direct-Indirect Speech - પ્રત્યક્ષ-પરોક્ષ કથન', lang: 'gu' },
    { id: 'future-tense-gu', folder: 'future-tense-gu', title: 'Future Tense (ભવિષ્યકાળ)', label: 'Future Tense - ભવિષ્યકાળ', lang: 'gu' },
    { id: 'gender-gu', folder: 'gender-gu', title: 'Gender (લિંગ)', label: 'Gender - લિંગ', lang: 'gu' },
    { id: 'non-finite-verbs-gu', folder: 'non-finite-verbs-gu', title: 'Non-Finite Verbs', label: 'Non-Finite Verbs', lang: 'gu' },
    { id: 'part-of-speech-gu', folder: 'part-of-speech-gu', title: 'Part of Speech', label: 'Part of Speech', lang: 'gu' },
    { id: 'participles-gu', folder: 'participles-gu', title: 'Participles (કૃદંત)', label: 'Participles - કૃદંત', lang: 'gu' },
    { id: 'past-tense-gu', folder: 'past-tense-gu', title: 'Past Tense (ભૂતકાળ)', label: 'Past Tense - ભૂતકાળ', lang: 'gu' },
    { id: 'personal-pronouns-gu', folder: 'personal-pronouns-gu', title: 'Personal Pronouns (પુરુષવાચક સર્વનામ)', label: 'Personal Pronouns - પુરુષવાચક સર્વનામ', lang: 'gu' },
    { id: 'prepositions-gu', folder: 'prepositions-gu', title: 'Prepositions (નામયોગી અવ્યય)', label: 'Prepositions - નામયોગી અવ્યય', lang: 'gu' },
    { id: 'present-tense-gu', folder: 'present-tense-gu', title: 'Present Tense (વર્તમાનકાળ)', label: 'Present Tense - વર્તમાનકાળ', lang: 'gu' },
    { id: 'pronouns-gu', folder: 'pronouns-gu', title: 'Pronouns (સર્વનામ)', label: 'Pronouns - સર્વનામ', lang: 'gu' },
    { id: 'question-tags-gu', folder: 'question-tags-gu', title: 'Question Tags (અનુપ્રશ્નો)', label: 'Question Tags - અનુપ્રશ્નો', lang: 'gu' },
    { id: 'singular-plural-gu', folder: 'singular-plural-gu', title: 'Singular-Plural (એકવચન-બહુવચન)', label: 'Singular-Plural - એકવચન-બહુવચન', lang: 'gu' },
    { id: 'subject-verb-agreement-gu', folder: 'subject-verb-agreement-gu', title: 'Subject-Verb Agreement', label: 'Subject-Verb Agreement', lang: 'gu' },
    { id: 'types-of-noun-gu', folder: 'types-of-noun-gu', title: 'Types of Noun (સંજ્ઞાના પ્રકારો)', label: 'Types of Noun - સંજ્ઞાના પ્રકારો', lang: 'gu' },
    { id: 'word-formation-gu', folder: 'word-formation-gu', title: 'Word Formation', label: 'Word Formation', lang: 'gu' },
    { id: 'all-tenses-gu', folder: 'all-tenses-gu', title: 'All Tenses (બધા કાળ)', label: 'All Tenses - બધા કાળના મિશ્ર પ્રશ્નો', lang: 'gu'}
];

export default function GrammarPage() {
    const { language } = useAppState();
    const [filteredTopics, setFilteredTopics] = useState<TopicMeta[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Filter hardcoded topics based on language
        const topicsForSelectedLang = hardcodedTopics
            .filter(topic => topic.lang === language);
        
        setFilteredTopics(topicsForSelectedLang);
        setLoading(false);
    }, [language]);
    
    const getTopicNames = (label: string) => {
        const parts = label.split(' - ');
        if (parts.length > 1) {
            return { englishName: parts[0], gujaratiName: parts.slice(1).join(' - ') };
        }
        return { englishName: label, gujaratiName: null };
    };


    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <div className="flex items-center w-full relative mb-4">
                 <Link href="/" passHref className="absolute left-0">
                    <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-full h-8 w-8">
                        <ArrowLeft className="h-4 w-4 text-primary" />
                    </Button>
                </Link>
                <div className="text-center w-full">
                    <h1 className="font-bold text-2xl text-3d-blue-white-shadow flex items-center justify-center gap-2">
                        <BookCopy className="h-6 w-6 text-primary" />
                        Grammar Guide
                    </h1>
                </div>
            </div>

            {loading ? (
                <div className="space-y-4">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
            ) : filteredTopics.length > 0 ? (
                filteredTopics.map((topic, index) => {
                    const { englishName, gujaratiName } = getTopicNames(topic.label);
                    const isAllTenses = topic.id === 'all-tenses-gu';

                    return (
                        <Card 
                            key={topic.id} 
                            className={cn(
                                "w-full shadow-lg overflow-hidden",
                                isAllTenses 
                                ? "border-2 border-purple-600 bg-gradient-to-br from-purple-50 via-white to-blue-50" 
                                : "border-2 border-blue-200 hover:border-blue-400"
                            )}
                        >
                            <CardHeader className="flex flex-row items-center justify-between text-center p-4">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "flex h-8 w-8 items-center justify-center rounded-lg text-white font-bold text-sm shadow-md ring-2 ring-white/50",
                                        isAllTenses 
                                        ? "bg-gradient-to-br from-purple-500 to-fuchsia-600"
                                        : "bg-gradient-to-br from-blue-500 to-indigo-600"
                                    )}>
                                        {index + 1}
                                    </div>
                                    <div className="text-left">
                                        <CardTitle className={cn(
                                            'text-lg',
                                            isAllTenses ? "text-purple-800" : "text-slate-800"
                                        )}>{englishName}</CardTitle>
                                        {gujaratiName && <p className="text-sm text-muted-foreground">{gujaratiName}</p>}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className={cn(
                              "p-3",
                              isAllTenses ? "bg-transparent" : "bg-slate-50/50"
                            )}>
                                {isAllTenses ? (
                                     <Link href={`/grammar/${topic.folder}/test`} passHref>
                                        <Button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg hover:shadow-xl">
                                             <TestTube2 className="mr-2 h-4 w-4" />
                                             Practice Mix Questions
                                         </Button>
                                     </Link>
                                ) : (
                                    <div className="grid grid-cols-2 gap-2">
                                        <Link href={`/grammar/${topic.id}`} passHref>
                                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                                <Brain className="mr-2 h-4 w-4" />
                                                Rules
                                            </Button>
                                        </Link>
                                        <Link href={`/grammar/${topic.folder}/test`} passHref>
                                           <Button className="w-full bg-green-600 hover:bg-green-700">
                                                <TestTube2 className="mr-2 h-4 w-4" />
                                                Test
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    );
                })
            ) : (
                 <Card className="w-full shadow-lg">
                    <CardContent className="p-6 text-center text-muted-foreground">
                        <p>No grammar topics available for the selected language yet.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
