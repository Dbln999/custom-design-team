import { classNames } from "../shared/lib/classNames/classNames.ts";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
