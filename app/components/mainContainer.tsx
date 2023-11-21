import Link from 'next/link';

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="navbar">
        <div className="link">
          <Link href={'/'}>Конфигурация</Link>
          <Link href={'/storage'}>Хранилище</Link>
        </div>
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: darkgray;
          padding: 15px;
        }
        .link {
          display: flex;
          justify-content: flex-start;
          column-gap: 10px;
          font-size: 20px;
          margin-right: 10px;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

export default MainContainer;
