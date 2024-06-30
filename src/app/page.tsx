import Index from '@/appIsomorphic/page';
// import { METHOD, networkInstance } from '@/network/network';

// const instance = networkInstance();
// instance.setPrefix('http://localhost:3000/api');

export default async function Home() {
  // const response = await instance.fetcher<{
  //   request: any;
  //   response: {
  //     sampleData: string;
  //   };
  // }>({
  //   url: '/sample',
  //   method: METHOD.GET,
  // });

  return <Index />;
}
