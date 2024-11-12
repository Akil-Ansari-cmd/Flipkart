import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Razor() {
    return (
        <div>
            <div className='flex h-[12vh] '>
                <div className='w-[20vw] '>
                    <div className='p-6 flex items-center justify-center'><img className='w-40' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg' /></div>
                </div>
                <div className='flex items-center w-[50vw] text-lg text-gray-600 gap-4'>
                    <div>Payments</div>
                    <div>Banking+</div>
                    <div>Payroll</div>
                    <div>Paartners</div>
                    <div>Resources</div>
                    <div>Supports</div>
                    <div>Pricing</div>
                </div>
                <div className='flex items-center w-[30vw] '>
                    <div className='flex ml-16 relative'>
                        <img className='w-10' src='https://seeklogo.com/images/I/india-flag-logo-3522C6780F-seeklogo.com.png' />
                        <div className='absolute ml-10 text-blue-500'><ArrowDropDownIcon /></div>
                    </div>
                    <div className='flex'>
                        <div className='ml-12 p-1 w-20 text-center border rounded-lg border-blue-500 font-semibold text-blue-500'>Login</div>
                    </div>
                    <div className='flex ml-3 p-1 w-28 border rounded-lg border-blue-500 bg-blue-600 font-semibold'>
                    <div className='ml-2 text-white'>Sign Up</div>
                    <div className='absolute mx-16 text-white '><ArrowForwardIcon style={{fontSize:'18px'}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Razor
