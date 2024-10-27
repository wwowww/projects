import Image from 'next/image';
const Empty = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-3">
      <Image src="/logo.svg" width={50} height={50} alt="chatgpt logo" />
      <h3 className="text-xl md:text-2xl font-bold">무엇을 도와드릴까요?</h3>
    </div>
  )
}

export default Empty;