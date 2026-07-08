import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const token = localStorage.getItem("token");

  
  // ================= FETCH TASKS =================

  const fetchTasks = useCallback(async () => {
  setLoading(true);

  try {
    const res = await axios.get("https://taskmanager-mern-l1fn.onrender.com/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTasks(res.data.tasks || []);

  } catch (error) {
    console.log(error.response?.data || error.message);

  } finally {
    setLoading(false);
  }

}, [token]);
  // ================= ADD / UPDATE =================

  const handleSubmit = async () => {
   if (!title) return toast.error("Enter Task Title");
    try {
      if (editId) {
        await axios.put(
  `https://taskmanager-mern-l1fn.onrender.com/api/tasks/${editId}`,
  {
    title,
    priority,
    dueDate,
  },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
       await axios.post(
  "https://taskmanager-mern-l1fn.onrender.com/api/tasks",
  {
    title,
    priority,
    dueDate,
  },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      setTitle("");
      setPriority("low");
      setEditId(null);

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // ================= DELETE =================

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `https://taskmanager-mern-l1fn.onrender.com/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // ================= COMPLETE =================

  const markCompleted = async (id) => {
    try {
      await axios.put(
        `https://taskmanager-mern-l1fn.onrender.com/api/tasks/${id}`,
        {
          status: "completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
const markPending = async (id) => {
  try {
    await axios.put(
      `https://taskmanager-mern-l1fn.onrender.com/api/tasks/${id}`,
      {
        status: "pending",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchTasks();
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
  // ================= EDIT =================
const startEdit = (task) => {
  setTitle(task.title);
  setPriority(task.priority || "low");
  setDueDate(task.dueDate || "");
  setEditId(task._id);
};

  // ================= LOGOUT =================
const deleteCompletedTasks = async () => {
  try {
    const completedTasks = tasks.filter(
      (task) => task.status === "completed"
    );

    for (const task of completedTasks) {
      await axios.delete(
        `https://taskmanager-mern-l1fn.onrender.com/api/tasks/${task._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    fetchTasks();
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchTasks();
  }, [token, navigate, fetchTasks]);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "completed"
  ).length;

  const overdueTasks = tasks.filter(
  (task) =>
    task.status !== "completed" &&
    task.dueDate &&
    new Date(task.dueDate) < new Date()
).length;

  let filteredTasks = tasks.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.status === "completed"
        : task.status !== "completed";

    return matchSearch && matchFilter;
  });

  // ================= SORT TASKS =================

if (sort === "newest") {
  filteredTasks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}

if (sort === "oldest") {
  filteredTasks.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
}

if (sort === "priority") {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  filteredTasks.sort(
    (a, b) =>
      priorityOrder[a.priority] - priorityOrder[b.priority]
  );
}

if (sort === "dueDate") {
  filteredTasks.sort(
    (a, b) =>
      new Date(a.dueDate || "9999-12-31") -
      new Date(b.dueDate || "9999-12-31")
  );
}

  return (
    <div className="dashboard-container">
      
     {loading && <h3>Loading tasks...</h3>}

      <div className="dashboard-header">

        <div>

          <h1 className="dashboard-title">
            📋 Task Manager
          </h1>

         <p className="welcome-text">
  Welcome User 👋
</p>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

       <button
  className="delete-btn"
  onClick={deleteCompletedTasks}
>
  Delete Completed
</button>

      </div>

      <div className="stats-container">

        <div className="stat-box">
          📌
          <br />
          Total
          <br />
          {totalTasks}
        </div>

        <div className="stat-box">
  ⚠️
  <br />
  Overdue
  <br />
  {overdueTasks}
</div>

        <div className="stat-box">
          ⏳
          <br />
          Pending
          <br />
          {pendingTasks}
        </div>

        <div className="stat-box">
          ✅
          <br />
          Completed
          <br />
          {completedTasks}
        </div>

      </div>

      <div className="input-container">

        <input
          type="text"
          placeholder="🔍 Search Task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
  <option value="priority">Priority</option>
  <option value="dueDate">Due Date</option>
</select>

      </div>

      <div className="input-container">

        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟠 Medium</option>
          <option value="high">🔴 High</option>
        </select>

        <button
          className="add-btn"
          onClick={handleSubmit}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

      </div>

      <ul className="task-list">

        {[...filteredTasks]
  .sort((a, b) =>
    sort === "newest"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt)
  )
  .map((task) => (

          <li
            key={task._id}
            className={`task-item ${
              task.status === "completed"
                ? "completed"
                : ""
            }`}
          >

            <span>

              <strong>{task.title}</strong>

<br />

Priority :
{" "}
{task.priority}

<br />

📅 Due Date :
{" "}
{task.dueDate ? task.dueDate.split("T")[0] : "Not Set"}

<br />

Status :
{" "}
{task.status}

            </span>

            <div>

              <button
                className="edit-btn"
                onClick={() => startEdit(task)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>

              {task.status === "completed" ? (
  <button
    className="edit-btn"
    onClick={() => markPending(task._id)}
  >
    Undo
  </button>
) : (
  <button
    className="add-btn"
    onClick={() => markCompleted(task._id)}
  >
    Complete
  </button>
)}

            </div>

          </li>

        ))}

        </ul>

    <footer className="footer">
      Developed by <strong>Itidarshini</strong> 💜
    </footer>

    </div>
  );
}

export default Dashboard;