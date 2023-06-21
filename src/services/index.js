export const getAllNewsService = async ({ date, topic }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/?modifiedAt=${date}&topic=${topic}`
  );

  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.data;
};

export const createUserService = async ({ name, email, password, bio }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, bio }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
export const validateUser = async ({ registrationCode }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/validate/${registrationCode}`
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const getNewByIdService = async (idNew) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/${idNew}`
  );
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);
  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const sendNewService = async ({ data, token }) => {
  const messageObject = {};
  const responseNew = await fetch(`${process.env.REACT_APP_BACKEND}/new`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const { message: messageNew, idNew } = await responseNew.json();
  if (!responseNew.ok) {
    throw new Error(messageNew);
  }
  messageObject.messageNew = messageNew;
  if (data.get("photo").size) {
    const responseImage = await fetch(
      `${process.env.REACT_APP_BACKEND}/new/${idNew}/photo`,
      {
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }
    );
    const { message: messageImage } = await responseImage.json();
    if (!responseImage.ok) {
      throw new Error(messageImage);
    }
    messageObject.messageImage = messageImage;
  }

  return messageObject;
};
export const uploadNewPhotoServices = async ({ idNew, data, token }) => {
  const responseImage = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${idNew}/photo`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );
  const { message } = await responseImage.json();
  if (!responseImage.ok) {
    throw new Error(message);
  }
  return message;
};

export const editNewService = async ({ data, token, idNew }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${idNew}`,
    {
      method: "PUT",
      body: data,
      headers: { Authorization: token },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const deleteNewService = async ({ idNew, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${idNew}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json;

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const deletePhotoService = async ({ idPhoto, idNew, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${idNew}/photos/${idPhoto}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
export const voteNewService = async ({ token, id }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/new/${id}/vote`,
    {
      method: "POST",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const getUserByIdService = async (idUser) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${idUser}`
  );
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.data;
};

export const recoveryPassService = async ({ email }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/recoverypassword`,
    {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};
export const deleteUserService = async ({ idUser, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${idUser}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json ();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const uploadAvatarService = async ({ data, token, id }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/avatar`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data.message;
};

export const resetPassService = async ({ recoverCode, newPassword }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/resetpassword`,
    {
      method: "POST",
      body: JSON.stringify({ recoverCode, newPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const deleteAvatarService = async ({ idAvatar, id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${id}/avatar/${idAvatar}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editUserService = async ({ token, idUser, name, email, bio }) => {
  console.log(JSON.stringify({ name, email, bio }));
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${idUser}`,
    {
      method: "PUT",
      body: JSON.stringify({ name, email, bio }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const getNewsByVotes = async ({ date }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/news/votes?modifiedAt=${date}`
  );
  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json.data;
};

export const editPassword = async ({
  idUser,
  currentPassword,
  newPassword,
  token,
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/user/${idUser}/password`,
    {
      method: "PUT",
      body: JSON.stringify({ currentPassword, newPassword }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};
