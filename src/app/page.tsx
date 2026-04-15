import Galaxy from "@/components/Background";


export default function Home() {
  return (
   
    <div className="bg-black/30 h-full w-full relative">
     <h1 className="bg-gray-900/30 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">This is Home page</h1>
     <div style={{ width: '100%', height: '650px', position: 'relative' }}>
      <Galaxy />
    </div>

    </div>
  );
}
