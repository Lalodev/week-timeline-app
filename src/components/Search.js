const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <div className="mb-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="form-control"
          id="search"
          name="search"
          value={search}
          placeholder="Search tasks"
          aria-describedby="task"
        />
      </div>
    </form>
  );
};

export default Search;
