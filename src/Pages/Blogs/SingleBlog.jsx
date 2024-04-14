import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../Api/Api';

const SingleBlog = () => {
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('')
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()

    const fetchSingleBlog = async () => {
        try {
            const response = await axios.get(`${Api}/hv-comapny/Blog/getsingle/${params.id}`);
            const { content } = response.data.Blog;
            const { title } = response.data.Blog;
            const { pic } = response.data.Blog;
            setcontent(content)
            settitle(title)
            setSelectedImage1(pic)
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching Blogs:', error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchSingleBlog();
    }, []);

    const htmlToPlainText = (html) => {
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.innerHTML || "";
    };

    return (
        <>
            <div className='container mx-auto relative'>
                <Link to="/allblogs" class="flex items-center absolute top-16 left-4 z-50 bg-slate-700 p-1 rounded-full pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className='text-[#a0ff00] hover:underline pr-1'>Go Back</span>
                </Link>
                {isLoading ? ( // Show loading state
                    <div className="flex justify-center items-center h-screen mx-auto">
                        <p className="text-2xl text-gray-500">Loading...</p>
                    </div>
                ) : (
                    <>
                        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
                            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                                    <header className="mb-4 lg:mb-6 not-format">
                                        <address className="flex items-center mb-6 not-italic">
                                            <div className="inline-flex items-center mr-3 text-sm text-gray-400 dark:text-white">
                                            </div>
                                        </address>
                                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-300 lg:mb-6 lg:text-4xl dark:text-white">
                                            {title}
                                        </h1>
                                    </header>
                                    <p className="lead text-gray-400">
                                        <div className="lead text-gray-400" dangerouslySetInnerHTML={{ __html: htmlToPlainText(content) }} />
                                    </p>
                                </article>
                            </div>
                        </main>
                    </>
                )}
            </div>
        </>
    );
};

export default SingleBlog;
