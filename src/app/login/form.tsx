
import { Button, ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
export default function Form() {
    return (
      <ConfigProvider theme={theme}>
<div className="w-96 h-96 p-20 bg-white rounded-xl shadow flex-col justify-center items-center gap-8 inline-flex">
  <div className="w-20 text-black text-3xl font-bold font-['Noto Sans']">Login</div>
  <div className="w-96 h-12 bg-teal-900 rounded-xl flex-col justify-center items-center flex">
    <div className="w-96 h-12 bg-teal-700 rounded-md border-2 border-teal-700" />
      <img className="w-6 h-8" src="https://via.placeholder.com/25x34" />
      <div className="text-white text-base font-bold font-['Lato']">Login with i2AM 1Smart</div>
  </div>
  <div className="self-stretch justify-start items-center gap-5 inline-flex">
    <div className="text-stone-300 text-base font-medium font-['Noto Sans'] leading-none">or</div>
  </div>
  <div className="self-stretch justify-start items-center gap-2 inline-flex">
    <div className="text-center text-black text-base font-bold font-['Noto Sans HK']">Login by Username / Email </div>
  </div>
  <div className="w-40 h-4 relative">
    <div className="w-16 left-[97.16px] top-0 absolute text-neutral-700 text-base font-medium font-['Noto Sans'] underline leading-none">Register</div>
    <div className="w-20 left-0 top-0 absolute text-neutral-700 text-base font-medium font-['Noto Sans'] leading-none">New User ?</div>
  </div>
  <div>
    <Button type='primary'>submit</Button>
  </div>
</div>
</ConfigProvider>
    )
}