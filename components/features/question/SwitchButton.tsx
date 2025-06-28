'use client'

import IButton from '@/components/common/IButton';
import Loading from '@/components/common/Loading';
import { useQuiz } from '@/context/CategoryProvider';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const SwitchButton = () => {

    const router = useRouter();
    const { category } = useQuiz();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isMsg, setIsMsg] = useState<boolean>(false);
    const handleRouter = () => {
        if (category === "") {
            setIsMsg(true)
        } else {
            setIsLoading(true);
            setTimeout(() => {
                router.push(`/question/${category}`)
            }, 500);
        }
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <IButton onClick={handleRouter}>Let&apos;s Start</IButton>
                    {isMsg && <p>Select one Please !!</p>}
                </>
            )}

        </>
    );
}

export default SwitchButton;
