import Game from '@/components/game';

export default function Home() {
  return (
    <main className='pt-8 w-full min-h-screen bg-gray-200'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl mb-4 italic font-bold'>TETRIS</h1>

        <Game />
      </div>
    </main>
  );
}
