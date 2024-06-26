import { ConfigProvider } from 'antd';
import { PageWrapper } from '@/components';
import { ErrorContainer } from '@/components';
import { ThemeConfig } from 'antd/es/config-provider/context';

type Page500Props = {
  error?: string;
  theme: ThemeConfig;
};

export const Page500 = ({ error = 'ошибка сервера', theme }: Page500Props) => {
  const withMenu = false;
  const errorCode = '500';
  return (
    <ConfigProvider theme={theme}>
      <PageWrapper withMenu={withMenu}>
        <ErrorContainer code={errorCode} description={error} />
      </PageWrapper>
    </ConfigProvider>
  );
};
