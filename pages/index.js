import Head from "next/head";
import Script from "next/script";


export default function Home() {
  return (
    <> 
    
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-SfTESDv8RUOrHQdjzFxmv6wOUnzRhrk" />
     

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
