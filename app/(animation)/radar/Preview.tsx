import React from 'react'
import { Radar } from './Radar';
import { HiDocumentReport, HiOutlineDocumentReport } from 'react-icons/hi';
import { IconContainer } from './IconContainer';
import { ArrowUpIcon, CurrencyDollarIcon, DeviceTabletIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Preview = () => {
  return (
    <div>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer text="Web Development" delay={0.2} />
            <IconContainer
              delay={0.4}
              text="Mobile apps"
              icon={<CurrencyDollarIcon className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Designing"
              delay={0.3}
              icon={<DeviceTabletIcon className=" h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Maintenence"
              delay={0.5}
              icon={<HiOutlineDocumentReport className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              text="Server management"
              icon={<ArrowUpIcon className=" h-8 w-8 text-slate-600" />}
              delay={0.8}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              text="GitHub Integration"
              icon={<HiDocumentReport className=" h-8 w-8 text-slate-600" />}
            />
            <IconContainer
              delay={0.7}
              text="CMS Integration"
              icon={<PaperAirplaneIcon className=" h-8 w-8 text-slate-600" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
      ;
    </div>
  );
}

export default Preview