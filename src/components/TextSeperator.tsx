export const TextSeperator = (props: { showBar: boolean }) => {
  return (
    <>
      {props.showBar && <p className="hidden sm:block select-none px-5">|</p>}
      <span className="sm:hidden w-full">
        <hr className="text-white border-2 w-full rounded-lg select-none" />
      </span>
    </>
  );
};
