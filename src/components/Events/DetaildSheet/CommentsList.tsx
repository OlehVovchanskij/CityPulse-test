import { Typography } from '@/components/ui/Typography';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Comment = {
  id: number;
  email: string;
  body: string;
};

const COMMENTS_LIMIT = 5;

const CommentsList = ({ comments }: { comments: Comment[] }) => {
  const [showAll, setShowAll] = useState(false);

  if (comments.length === 0) {
    return <Text>No comments yet</Text>;
  }

  const visibleComments = showAll ? comments : comments.slice(0, COMMENTS_LIMIT);

  return (
    <>
      <Typography variant="h3" className="mb-3">
        Comments
      </Typography>

      {visibleComments.map((comment) => (
        <View key={comment.id} className="mb-4 rounded-xl bg-header p-3">
          <Typography variant="body" className="mb-1 font-semibold">
            {comment.email}
          </Typography>
          <Typography variant="body">{comment.body}</Typography>
        </View>
      ))}

      {comments.length > COMMENTS_LIMIT && !showAll && (
        <TouchableOpacity onPress={() => setShowAll(true)}>
          <Typography variant="body" className="text-center">
            Show more
          </Typography>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CommentsList;
