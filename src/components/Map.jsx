const Map = () => {
  return (
    <div className='relative w-full h-96 '>
      <iframe
        className='absolute top-0 left-0 w-full h-full'
        frameBorder='0'
        src='https://www.google.com/maps/embed/v1/place?q=All+Saints+Medical+center,+Bukejje+stage,+Kampala,+Uganda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
      ></iframe>
    </div>
  );
};
export default Map;
