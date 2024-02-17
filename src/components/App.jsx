import FeedbackUser from './feedback/feedbackUser';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      <FeedbackUser></FeedbackUser>
    </div>
  );
};
