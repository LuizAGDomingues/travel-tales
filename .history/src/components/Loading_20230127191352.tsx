import { Skeleton } from '@mui/material';

function Loading() {
  return (
    <div className="w-screen h-screen p-14">
      <Skeleton variant="rounded" sx={{width: '100%', height: '100%'}} />
    </div>
  );
}

export default Loading;
