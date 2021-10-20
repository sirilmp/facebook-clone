import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sponsored from '../components/Sponsored'
import Posts from '../components/Posts';
import PostButtonSection from '../components/PostButtonSection';
import CreateStory from '../components/CreateStory';
import CreateRoom from '../components/CreateRoom';




function Home() {
    return (
        <>
            <Header />
            <div className='flex dark:bg-gray-900 w-full'>
                <Feed />
                <div className='dark:bg-gray-900 w-full flex justify-center'>
                    <div className='max-w-xl px-3 w-full dark:bg-gray-900'>
                        {/* create story section */}
                        <CreateStory />
                        {/* post buttons section */}
                        <PostButtonSection />
                        {/* create room section */}
                        <CreateRoom />
                        {/* post section */}
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                    </div>
                </div>
                <Sponsored />
            </div>
        </>
    )
}

export default Home
