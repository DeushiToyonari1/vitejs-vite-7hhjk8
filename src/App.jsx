import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: 'じゃけぇ',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: '1234@example.com',
  phone: '090-1111-2222',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com',
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
