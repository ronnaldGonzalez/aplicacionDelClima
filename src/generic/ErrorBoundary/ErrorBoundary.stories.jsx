import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
    title: "errorBoundary",
    component: ErrorBoundary
}
const ComponentWithoutError = () => <h1>sin error</h1>

const prop = undefined;
const ComponentWithError = () => <h1>{prop.hola}</h1>
export const errorBoundaryWithErrorExample = () => (
    <ErrorBoundary>
        <ComponentWithError/>
    </ErrorBoundary>
)
export const errorBoundaryWithoutErrorExample = () => (
    <ErrorBoundary >
        <ComponentWithoutError/>
    </ErrorBoundary>
)