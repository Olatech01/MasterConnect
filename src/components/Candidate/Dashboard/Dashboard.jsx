import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    const skiils = [
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Beginner' },
        { name: 'Redux', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Beginner' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'Docker', level: 'Beginner' },
        { name: 'Jest', level: 'Advanced' },
        { name: 'Cypress', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
    ]
    return (
        <div className='flex flex-col gap-[2rem]'>
            <div>
                <h1 className='text-[20px] font-semibold'>Dashboard</h1>
            </div>
            <div className='bg-[#ECF8FF] min-h-[250px] w-full gap-[1rem] rounded-lg flex sm:flex-col px-[2rem] items-center'>
                <Image height={100} width={150} src={"/candidate.svg"} alt='' />
                <div className='w-full flex flex-col gap-3'>
                    <h2 className='text-[20px] font-semibold'>Akhil Nishtala</h2>
                    <div className='grid grid-cols-3 gap-4 w-full sm:grid-cols-2'>
                        <p className='text-[16px] font-medium'>Mail: <span className='font-semibold'>xyz123@gmail.com</span></p>
                        <p className='text-[16px] font-medium'>Interested Position: <span className='font-semibold'>UX/UI Designer</span></p>
                        <p className='text-[16px] font-medium'>Rating: xyz123@gmail.com</p>
                        <p className='text-[16px] font-medium'>Age: <span className='font-semibold'>19</span></p>
                        <p className='text-[16px] font-medium'>Internships Completed: <span className='font-semibold'>2</span></p>
                        <p className='text-[16px] font-medium'>Average Magic Score: 74</p>
                        <p className='text-[16px] font-medium'>Gender: <span className='font-semibold'>Male</span></p>
                        <p className='text-[16px] font-medium'>Linkedin: <span className='font-semibold'>https:linkedinmejao.com</span></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-1'>
                <div className=' flex flex-col gap-[20px] '>
                    <h2 className='text-[20px] font-semibold'>Test Scores</h2>
                    <div className='border-2 rounded-lg px-3 min-h-[382px] flex flex-col gap-[2rem] py-[1rem]'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-semibold'>Front-End Development</h2>
                            <p className='text-[14px] font-medium'>Magic Score: 96/100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-semibold'>Back-End Development</h2>
                            <p className='text-[14px] font-medium'>Magic Score: 96/100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-semibold'>Front-End Development</h2>
                            <p className='text-[14px] font-medium'>Magic Score: 96/100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-semibold'>Back-End Development</h2>
                            <p className='text-[14px] font-medium'>Magic Score: 96/100</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-[20px] font-semibold'>Front-End Development</h2>
                            <p className='text-[14px] font-medium'>Magic Score: 96/100</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-[20px] '>
                    <h2 className='text-[20px] font-semibold'>Skills</h2>
                    <div className='grid grid-cols-3 gap-4 w-full px-3 min-h-[382px] py-3 border-2 rounded-lg'>
                        {skiils.map((skill, index) => (
                            <div key={index} className='bg-[#ECF7FF] border flex items-center justify-center border-[#556A92] rounded-full h-[35px]'>
                                <p className='text-[16px] font-medium '>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-1'>
                <div className='flex flex-col gap-[20px]'>
                    <h2 className='text-[20px] font-semibold'>Education</h2>
                    <div className='border-2 rounded-lg px-3 min-h-[502px] py-4'>
                        <div className='flex flex-col gap-2 border-b py-3'>
                            <h2 className='text-[18px] font-semibold'>Degree</h2>
                            <div className='flex gap-2'>
                                <h2 className='text-[16px] font-normal'>Bachelor of Technology</h2>
                                <p className='text-[16px] font-normal'>(2020 - 2023)</p>
                            </div>
                            <p className='text-[16px] font-normal'>Computer Science and Engineering - Data Analytics</p>
                            <h3 className='text-[16px] font-normal'>Centurion University of Technology and Management, Vizianagaram</h3>
                        </div>
                        <div className='flex flex-col gap-2 border-b py-3'>
                            <h2 className='text-[18px] font-semibold'>XII: Senior Secondary High School</h2>
                            <div className='flex gap-2'>
                                <h2 className='text-[16px] font-normal'>Mathematics, Physics and Chemistry (MPC)</h2>
                            </div>
                            <h3 className='text-[16px] font-normal'>Sri Chaitanya Junior College, Carshed</h3>
                        </div>
                        <div className='flex flex-col gap-2 py-3'>
                            <h2 className='text-[18px] font-semibold'>X: Secondary High School</h2>
                            <div className='flex gap-2'>
                                <h2 className='text-[16px] font-normal'>Secondary School Certificate</h2>
                            </div>
                            <h3 className='text-[16px] font-normal'>Pollocks High School, Dwarakanagar</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <h2 className='text-[20px] font-semibold'>Candidate Preview</h2>
                    <div className='rounded-lg min-h-[502px] flex flex-col gap-3'>
                        <div className='flex flex-col items-center justify-center py-3 gap-3 bg-[#343434] rounded-lg'>
                            <Image height={100} width={250} src={"/avatar.svg"} alt='' />
                            <div className='flex w-full overflow-x-hidden'>
                                <Image height={100} width={250} src={"/red.svg"} className='w-full' alt='' />
                                <Image height={100} width={250} src={"/line.svg"} className='w-full' alt='' />
                            </div>
                            <div className='flex justify-between w-full text-white text-[14px] px-2'>
                                <p>00:03</p>
                                <p>00:49</p>
                            </div>
                            <Image height={100} width={100} src={"/control.svg"} alt='' />
                        </div>
                        <p className='text-[16px] font-normal px-3'>Last Updated on: <span className='font-semibold'>24-08-2021</span></p>
                        <div className='flex gap-[3rem] items-center font-semibold text-[18px] px-3'>
                            <h2>Rating: </h2>
                            <div className='flex gap-2'>
                                <Image height={100} width={20} src={"/star.svg"} alt=''/>
                                <Image height={100} width={20} src={"/star.svg"} alt/>
                                <Image height={100} width={20} src={"/star.svg"} alt=''/>
                                <Image height={100} width={20} src={"/star.svg"} alt=''/>
                                <Image height={100} width={20} src={"/star.svg"} alt=''/>
                            </div>
                        </div>
                        <div className='flex gap-[3rem] font-semibold text-[18px] px-3'>
                            <h2>Average Magic Score: </h2>
                            <p>74/100</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-1'>
                <div className=' flex flex-col gap-[20px] '>
                    <h2 className='text-[20px] font-semibold'>Internships</h2>
                    <div className='border-2 rounded-lg px-3 min-h-[502px] py-4'>
                        <div className='flex flex-col gap-2 border-b py-3'>
                            <div className='flex justify-between'>
                                <h2 className='text-[18px] font-semibold'>Front End Development  </h2>
                                <p className='text-[18px] font-semibold'>27 Jun’ 2023 - Present</p>
                            </div>
                            <h3 className='text-[16px] font-normal'>Linsible Technologies</h3>
                            <ul className='flex flex-col gap-2 list-disc px-3 text-[16px] font-normal'>
                                <li>Created Landing Page with mockups</li>
                                <li>Designed Registration forms</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 py-3'>
                            <div className='flex justify-between'>
                                <h2 className='text-[18px] font-semibold'>Front End Development  </h2>
                                <p className='text-[18px] font-semibold'>27 Jun’ 2023 - Present</p>
                            </div>
                            <h3 className='text-[16px] font-normal'>Linsible Technologies</h3>
                            <ul className='flex flex-col gap-2 list-disc px-3 text-[16px] font-normal'>
                                <li>Created Landing Page with mockups</li>
                                <li>Designed Registration forms</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className=' flex flex-col gap-[20px] '>
                    <h2 className='text-[20px] font-semibold'>Projects</h2>
                    <div className='border-2 rounded-lg px-3 min-h-[502px] py-4'>
                        <div className='flex flex-col gap-2 border-b py-3'>
                            <h2 className='text-[18px] font-semibold'>Restaurant Digital Menu (Front End Development)</h2>
                            <h3 className='text-[16px] font-normal'>Project Link: <span className='text-[#004BFF]'>https://projectlink.com</span></h3>
                            <ul className='flex flex-col gap-2 list-disc px-3 text-[16px] font-normal'>
                                <li>Created Landing Page with mockups</li>
                                <li>Designed Registration forms</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 py-3'>
                            <h2 className='text-[18px] font-semibold'>Restaurant Digital Menu (Front End Development)</h2>
                            <h3 className='text-[16px] font-normal'>Project Link: <span className='text-[#004BFF]'>https://projectlink.com</span></h3>
                            <ul className='flex flex-col gap-2 list-disc px-3 text-[16px] font-normal'>
                                <li>Created Landing Page with mockups</li>
                                <li>Designed Registration forms</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-[20px] '>
                <h2 className='text-[20px] font-semibold'>Certifications and Awards</h2>
                <div className='grid grid-cols-3 gap-2 px-5'>
                    <Image height={100} width={200} src={'/gov1.svg'} alt='' className='w-full' />
                    <Image height={100} width={200} src={'/gov2.svg'} alt='' className='w-full' />
                    <Image height={100} width={200} src={'/gov1.svg'} alt='' className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard