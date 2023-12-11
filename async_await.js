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

// Function to handle the process using async/await
async function handleProcess() {
    try {
        await Promise.all([
            createPost({ title: "Post 1" }),
            createPost({ title: "Post 2" }),
            createPost({ title: "Post 3" }),
        ]);

        const updatedLastActivityTime = await updateLastUserActivityTime();

        console.log("User's Last Activity Time:", updatedLastActivityTime);
        console.log("All Posts:", posts);

        const deletedPost = await deletePost();

        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
handleProcess();
