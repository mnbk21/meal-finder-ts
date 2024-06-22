

type FormProps = {
  // setMealNameがuseState由来のReact独自のfunctionの為、「React.～」という型定義になっている
  setMealName: React.Dispatch<React.SetStateAction<string>>;
  getMealData: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form = ({setMealName , getMealData}: FormProps )  => {

  return (
    <form onSubmit={getMealData}>
      <input type="text" name="mealName" placeholder="料理名を英語で入力" required onChange={(event) => setMealName(event.target.value)}/>
      <button>検索</button>
    </form>
  )
}

export default Form