/* eslint-disable react/prop-types */
const ImageSwap = ({ imgURL, changeBigMedImage, bigMedImg }) => {
  const handleClick = () => {
    if (bigMedImg !== imgURL.medImage) {
      changeBigMedImage(imgURL.medImage);
    }
  };

  return (
    <div className={`flex justify-center cursor-pointer sm:m-8 md:m-0 max-sm:flex-1`} onClick={handleClick}>      
        <img
          src={imgURL.thumbnail}
          alt='med image colletion'
          width={100}
          height={103.34}
          className='rounded-sm'
        />
     
    </div>
  );
};
export default ImageSwap;
