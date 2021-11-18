import { LoadingSkeleton } from './ModalLoading.styles';

const ModalLoading = () => {
  return (
    <>
      <LoadingSkeleton height={56} />
      <LoadingSkeleton height={56} />
      <LoadingSkeleton variant="rect" height={150} />
    </>
  );
};

export default ModalLoading;
