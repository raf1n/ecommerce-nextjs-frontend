import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

const items = [
    {
        id: 1,
        question: 'What is Next.js?',
        answer: 'Next.js is a JavaScript framework for building server-rendered or statically exported React apps.',
        description: 'Next.js is designed to make building web applications with React easy. It includes features such as automatic code splitting, optimized performance, and simple client-side routing.'
    },
    {
        id: 2,
        question: 'What is Tailwind CSS?',
        answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        description: 'Tailwind CSS is different from traditional CSS frameworks like Bootstrap or Foundation, in that it does not come with pre-designed UI components. Instead, it provides low-level utility classes that let you build your own custom components by composing them together.'
    },
];



interface Props {
}

const Drawer: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [activeIndex, setActiveIndex] = React.useState(null);
    const handleClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    return (
        <div>
            <div className="accordion">
                {items.map((item, index) => (
                    <div key={item.id}>
                        <button
                            className="block text-left w-full rounded-t-md py-3 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                            onClick={() => handleClick(index)}
                        >
                            <div className="flex items-center">
                                <div className="w-full text-lg leading-5 font-medium text-gray-700">{item.question}</div>
                                {/* <div className="w-3/4 pl-3">{item.answer}</div> */}
                            </div>
                        </button>
                        {activeIndex === index && (
                            <div className="rounded-b-md py-2 overflow-hidden bg-white">
                                <div className="px-4 py-3 text-gray-700">
                                    {item.description}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Drawer