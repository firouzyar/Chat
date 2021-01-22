import React from 'react';
import Route from './Route/index';
import ErrorBoundary from "./ustils/ErrorBoundary";
import Layout from "./components/Layout/Layout"
import MaterialThemeProvider from "./components/Layout/MaterialThemeProvider";
function App() {

  return (
      <ErrorBoundary>
        <MaterialThemeProvider>
          <Layout>
            <Route/>
          </Layout>
        </MaterialThemeProvider>
      </ErrorBoundary>
  );
}

export default App;

