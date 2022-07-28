import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { config, useSpring, animated } from 'react-spring';

const Loading = ({ isLoading }: { isLoading: boolean }) => {
    const router = useRouter();

    return (
        <div className="loading-animation">
            <Transition show={isLoading}>
                <Dialog as="div" className="relative z-10" onClose={() => {}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="loading-animation-leave-from"
                        leaveTo="loading-animation-leave-to"
                    >
                        <div className="fixed top-0 inset-0 h-1/2 bg-black bg-opacity-100" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="loading-animation-leave-from-reverse"
                        leaveTo="loading-animation-leave-to-reverse"
                    >
                        <div className="fixed bottom-0 left-0 right-0  h-1/2 bg-black bg-opacity-100" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed top-0 inset-0 flex justify-center items-center">
                            <p>
                                Loading{' '}
                                <code className="bg-white/20 px-2 py-1 rounded-md">
                                    {router.pathname}
                                </code>{' '}
                                please wait...
                            </p>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
            <div />
        </div>
    );
};

export default Loading;
