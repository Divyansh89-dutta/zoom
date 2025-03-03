import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
