import * as React from 'react';

const UserContext = React.createContext("");
UserContext.displayName = 'User';

export const UserProvider = UserContext.Provider;

export default UserContext;