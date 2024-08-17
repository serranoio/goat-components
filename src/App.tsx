import './App.css';
import HelloFromFounder from './components/unique/HelloFromFounder/HelloFromFounder';

export default function App() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-7xl px-4 max-w-[1200px] py-8">
        <div>
          <h1 className="text-center h1">
            This is a <span>goated</span> component library made for creating
            social media apps
          </h1>
          {/* Insert an extremely casual image of me: Ex: like Dave's smoking pics */}
          <p className="text-center p">Made for use with shadcn ;)</p>
          <HelloFromFounder />
        </div>
      </main>
      <footer>
        <p className="text-center">Made with Love ❤️</p>
      </footer>
    </>
  );
}

