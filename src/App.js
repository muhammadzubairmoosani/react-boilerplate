import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./Routing/AppRoutes";
import { IntlProvider } from "react-intl";
import { translations } from "./LanguageProvider/Languages";
const locale = navigator.language;

function App() {
  return (
    <div>
      <IntlProvider local={locale} messages={translations.US}>
        <Router>
          <AppRoutes />
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;
