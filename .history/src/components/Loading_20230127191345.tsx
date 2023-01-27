import { Skeleton } from '@mui/material';

function Loading() {
  return (
    <div className="w-screen h-screen p-14">
      <Skeleton variant="rounded" sx={{width: '100%', hei}} />
    </div>
  );
}

export default Loading;
