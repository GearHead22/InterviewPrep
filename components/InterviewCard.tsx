import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({userId, interviewId, role, type, techstack, createdAt} :InterviewCardProps) => {

    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type)? 'Mixed': type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div className="card-interview">
            <div>
                <div className='bg-light-600 absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg '>
                    <p className="badge-text">
                        {normalizedType}
                    </p>
                </div>
                <Image width={90} height={90} alt='random-logo' className='object-fit round-full size-[90px]' src={getRandomInterviewCover()}/>

                <h3 className='capitalize mt-5'>
                    {role} Interview
                </h3>
                <div className="flex gap-5 mt-3">
                    <div className='flex gap-2'>
                        <Image height={20} width={20} src='/calendar.svg' alt="calendar"/>
                        <p>{formattedDate}</p>
                    </div>
                    <div className='flex gap-2'>
                        <Image src="/star.svg" alt="star" width={20} height={20}/>
                        <p>{feedback?.totalScore || '---'}/100</p>

                    </div>
                </div>
                <p className='line-clamp-2 mt-5'>
                    {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills"}
                </p>
            </div>
            <div className='flex justify-between'>
                <DisplayTechIcons techStack={techstack}/>

                <Button className="btn-primary">
                    <Link href={feedback?`/interview/${interviewId}/feedback`:`interview/${interviewId}`}>
                        {feedback? 'Check feedback':'View interview'}
                    </Link>
                </Button>
            </div>
        </div>

    </div>
  )
}

export default InterviewCard