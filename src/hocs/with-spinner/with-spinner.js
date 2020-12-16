import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => isLoading
        ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        : (
            <WrappedComponent {...otherProps} />
        )

    return Spinner;
}

export default withSpinner;