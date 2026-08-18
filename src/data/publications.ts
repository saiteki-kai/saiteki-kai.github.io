export interface Publication {
	title: string;
	authors: string[];
	venue: string;
	year: number;
	abstract: string;
	paperUrl?: string;
	posterUrl?: string;
	codeUrl?: string;
}

export const publications: Publication[] = [
	{
		title: 'BeaverTails-IT: Towards A Safety Benchmark for Evaluating Italian Large Language Models',
		authors:
			['Giuseppe Magazzù', 'Alberto Sormani', 'Giulia Rizzi', 'Francesca Pulerà', 'Daniel Scalena', 'Stefano Cariddi', 'Edoardo Michielon', 'Marco Pasqualini', 'Claudio Stamile', 'Elisabetta Fersini'],
		venue: "Proceedings of the Eleventh Italian Conference on Computational Linguistics (CLiC-it 2025)",
		year: 2025,
		abstract:
			'Large Language Models (LLMs) have achieved remarkable success in generating human-like text and are increasingly integrated into real-world applications. However, their deployment raises significant safety concerns, including the risk of generating harmful, biased, or culturally inappropriate content. While several safety benchmarks exist for English, nonEnglish contexts—such as Italian—remain critically underexplored, despite the growing demand for localized and culturally sensitive AI technologies. In this paper, we introduce BeaverTails-IT, the first Italian safety benchmark for LLMs, created through the machine translation of the original English BeaverTails dataset. We employ five state-of-the-art translation models, evaluate translation quality using automated metrics and human judgments, and provide guidelines for selecting high-quality safety prompts. Our benchmark enables the preliminary evaluation of Italian LLMs across key safety dimensions such as toxicity, bias, and ethical compliance. Beyond presenting the translated dataset, we offer a detailed analysis of its limitations, highlighting the challenges of using translated content as a proxy for native benchmarks. Our findings demonstrate the need for a dedicated, culturally grounded Italian safety benchmark to ensure effective and contextually appropriate evaluations.',
		paperUrl: 'https://aclanthology.org/2025.clicit-1.60/',
		posterUrl: '/posters/CLiC-it_2025_Poster_BeaverTails-IT.pdf',
	},
	{
		title: 'Uncovering Unsafety Traits in Italian Language Models',
		authors:
			['Giulia Rizzi', 'Giuseppe Magazzù', 'Alberto Sormani', 'Francesca Pulerà', 'Daniel Scalena', 'Elisabetta Fersini'],
		venue: "Proceedings of the Eleventh Italian Conference on Computational Linguistics (CLiC-it 2025)",
		year: 2025,
		abstract:
			'Large Language Models (LLMs) are increasingly deployed in real-world applications, raising urgent concerns around their safety, reliability, and ethical behavior. While existing safety evaluations have primarily focused on English, low- and mid-resource languages such as Italian remain critically underexplored. In this paper, we present the first comprehensive and multidimensional evaluation of LLM safety in the Italian language. We assess seven state-of-the-art LLMs across key safety dimensions using several automatic moderators tailored to cover the Italian settings. Furthermore, we analyze the challenges of adapting English-centric safety benchmarks to Italian via machine translation, highlighting limitations and proposing best practices for developing culturally and linguistically grounded evaluation frameworks.',
		paperUrl: 'https://aclanthology.org/2025.clicit-1.91/',
	},
	{
		title: '"Capisci a me": The Hidden Risks of Regional Language Processing in LLMs',
		authors: ['Giuseppe Magazzù', 'Giulia Rizzi', 'Elisabetta Fersini'],
		venue: "Proceedings of the Twelfth Italian Conference on Computational Linguistics (CLiC-it 2026)",
		year: 2026,
		abstract:
			'This study evaluates the linguistic proficiency and safety alignment of Large Language Models (LLMs) across a spectrum of five local languages of Italy. While LLMs generate relevant, task-appropriate outputs for these languages, demonstrating cross-lingual transfer, we identify a significant performance degradation and a "dialectal bypass" in safety guardrails. Our analysis reveals that while models respond coherently to local languages, they often exhibit reduced linguistic consistency during generation, frequently defaulting to high-resource languages like Standard Italian or English. Most critically, we find that safety alignment frequently fails to generalize to dialect groups, leading to a marked increase in unrefused harmful content. These findings suggest that current alignment strategies are heavily biased toward dominant languages, leaving language varieties as a vulnerable "low-resource backdoor" that requires more robust, linguistically diverse training and evaluation frameworks.',
	},
	{
		title: 'The Effects of Benevolent Fine-Tuning on the Safety of Italian Large Language Models',
		authors: ['Francesca Pulerà', 'Giulia Rizzi', 'Giuseppe Magazzù', 'Elisabetta Fersini'],
		venue: "Proceedings of the Twelfth Italian Conference on Computational Linguistics (CLiC-it 2026)",
		year: 2026,
		abstract:
			'This paper investigates unsafety drift in Italian Large Language Models (LLMs), examining how benevolent fine-tuning (i.e., tuning on non-toxic, benign data) can inadvertently erode safety guardrails. We evaluated six Italian open-source models using three benevolent datasets and introduced the \textit{Unsafety Sensitivity Index} (USI) to quantify shifts in safety behavior. Using three specialized automated oracles, our results reveal a "safety paradox" where models with the highest initial alignment exhibit the greatest vulnerability to behavioral degradation. This work offers the first systematic assessment of fine-tuning-induced safety drift in Italian LLMs, providing a reproducible framework for evaluating behavioral risks in non-English linguistic settings.',
	},
].sort((a, b) => b.year - a.year);
