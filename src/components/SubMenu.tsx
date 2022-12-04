export default function SubMenu({ setGradeLevel }) {
  const GRADE_LEVELS = [
    'Junior Casa',
    'Senior Casa',
    'Advanced Casa',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
  ]

  return (
    <div className="p-4">
      <h1 className="font-bold mb-2">Grade Levels</h1>
      <ul className="flex flex-col gap-2">
        {
          GRADE_LEVELS.map(g => (
            <li key={g}>
              <a onClick={() => setGradeLevel(g)}>{g}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}