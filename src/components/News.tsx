import { Providers } from '@/utils/providers';
import { Article } from './types';
import Image from 'next/image';

type NewsProps = {
    article: Article;
};

export default function News({ article }: NewsProps) {
    return (
        <Providers>
            <a href={article.url} target="_blank">
                <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-800 transition duration-200'>
                    <div className='space-y-0.5'>
                        <h6 className='text-sm font-bold'>{article.title}</h6>
                        <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
                    </div>
                    <Image src={article.urlToImage} alt={article.title} className='rounded-xl' width="70" height="70" loading="lazy" />
                </div>
            </a>
        </Providers>
    )
}
