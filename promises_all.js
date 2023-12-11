const user = {
    lastActivityTime: null,
};

const posts = [];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve(user.lastActivityTime);
        }, 1000);
    });
}

// Function to simulate deleting the last post
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Create three posts and update the user's last activity time
Promise.all([
    createPost({ title: "Post 1" }),
    createPost({ title: "Post 2" }),
    createPost({ title: "Post 3" }),
])
    .then(() => updateLastUserActivityTime())
    .then((updatedLastActivityTime) => {
        console.log("User's Last Activity Time:", updatedLastActivityTime);
        console.log("All Posts:", posts);

        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => {
        console.error(error);
    });
