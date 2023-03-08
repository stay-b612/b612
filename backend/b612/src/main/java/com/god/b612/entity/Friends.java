package com.god.b612.entity;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "friends")
public class Friends extends  BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "friend_id")
    private int friendId;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(referencedColumnName = "member_id", name = "friend_request_member_id")
    private Members friendRequestMemberId;
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(referencedColumnName = "member_id", name = "friend_response_member_id")
    private Members friendResponseMemberId;

    @NotNull
    @ColumnDefault("0")
    private byte friendAccepted;

    @Builder
    public Friends(int friendId, Members friendRequestMemberId, Members friendResponseMemberId, byte friendAccepted) {
        this.friendId = friendId;
        this.friendRequestMemberId = friendRequestMemberId;
        this.friendResponseMemberId = friendResponseMemberId;
        this.friendAccepted = friendAccepted;
    }

}
