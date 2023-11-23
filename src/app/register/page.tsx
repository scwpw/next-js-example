import { AddForm } from "./add-form"
import theme from '@/app/theme/themeConfig';
import { ConfigProvider } from 'antd';

export default function Page() {
  return (
    <ConfigProvider theme={theme}>
      <main className="bg-white">
        <div className="flex items-end justify-center">
          <h1 className="sr-only">Create User</h1>
          <AddForm />
        </div>
      </main>
    </ConfigProvider>
  )
}
