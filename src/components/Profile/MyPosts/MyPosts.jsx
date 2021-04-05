import React from "react";
import s from "./MyPosts.module.css";
import Comment from "./Post/Comment";
import { Field, Form, reduxForm } from "redux-form";

const MyPostsForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className={s.inputWrapper}>
        <Field
          component={"textarea"}
          name={"newPostText"}
          className={s.inputText}
          rows="3"
        />
      </div>
      <div className={s.btnWrapper}>
        <button className={s.btnAddPost}> Add post </button>
      </div>
    </Form>
  );
};
const MyPostsReduxForm = reduxForm({ form: "newPost" })(MyPostsForm);

const MyPosts = (props) => {
  let post = props.posts.map((p, idx) => (
    <Comment key={idx} message={p.post} likes={p.likesCount} />
  ));
  const onSubmit = (formData) => {
    props.addNewPost(formData.newPostText);
  };
  return (
    <div className={s.myPostsWrapper}>
      <h3 className={s.title}>My posts</h3>
      <MyPostsReduxForm onSubmit={onSubmit} />
      <div className={s.comments}>{post}</div>
    </div>
  );
};

export default MyPosts;
